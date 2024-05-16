"use client";

import editCourseSyllabus from "@/actions/courses/edit-course-syllabus";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Prisma } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "./card";
import { LuMove } from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SyllabusEditFormProps = {
  courseId: string;
  course: Prisma.CourseGetPayload<{
    include: {
      syllabus: {
        include: {
          sections: {
            include: {
              elements: true;
            };
          };
        };
      };
    };
  }>;
};

const formSchema = z.object({
  sections: z.array(
    z.object({
      id: z.string(),
      value: z.string(),
      order: z.number(),
      elements: z.array(
        z.object({
          id: z.string(),
          value: z.string(),
          order: z.number(),
        })
      ),
    })
  ),
});

export default function SyllabusEditForm({
  course,
  courseId,
}: SyllabusEditFormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sections:
        course.syllabus?.sections
          .toSorted((a, b) => a.order - b.order)
          .map((section) => ({
            id: section.id,
            value: section.value,
            order: section.order,
            elements: section.elements
              .toSorted((a, b) => a.order - b.order)
              .map((element, i) => ({
                id: element.id,
                value: element.value,
                order: i,
              })),
          })) || [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log(values);
    await editCourseSyllabus(courseId, course.syllabus?.id || "", values);
    setLoading(false);
  }

  const moveElement = useCallback(
    (dragIndex: number, hoverIndex: number, sectionIndex: number) => {
      form.setValue(
        `sections`,
        form.getValues(`sections`).map((section, i) => {
          if (i === sectionIndex) {
            return {
              ...section,
              elements: section.elements
                .map((element, j) => {
                  if (j === dragIndex) {
                    return section.elements[hoverIndex];
                  } else if (j === hoverIndex) {
                    return section.elements[dragIndex];
                  }
                  return element;
                })
                .map((element, index) => ({
                  ...element,
                  order: index,
                })),
            };
          }
          return section;
        })
      );
      console.log(form.getValues(`sections.0.elements`));
    },
    []
  );

  function removeElement(sectionIndex: number, index: number) {
    form.setValue(
      `sections`,
      form.getValues(`sections`).map((section, i) => {
        if (i === sectionIndex) {
          return {
            ...section,
            elements: section.elements.filter((_, j) => j !== index),
          };
        }
        return section;
      })
    );
  }

  function changeElementValue(
    sectionIndex: number,
    index: number,
    value: string
  ) {
    form.setValue(
      `sections`,
      form.getValues(`sections`).map((section, i) => {
        if (i === sectionIndex) {
          return {
            ...section,
            elements: section.elements.map((element, j) => {
              if (j === index) {
                return {
                  ...element,
                  value,
                };
              }
              return element;
            }),
          };
        }
        return section;
      })
    );
  }

  const renderElement = useCallback(
    (
      card: { id: string; value: string },
      index: number,
      sectionIndex: number
    ) => {
      return (
        <Card
          type={`card` + sectionIndex}
          key={card.id}
          index={index}
          id={card.id}
          moveCard={(dragIndex, hoverIndex) =>
            moveElement(dragIndex, hoverIndex, sectionIndex)
          }
        >
          <div className="flex gap-4">
            <Input
              value={card.value}
              onChange={(e) =>
                changeElementValue(sectionIndex, index, e.target.value)
              }
            />
            <Button
              type="button"
              variant="secondary"
              onClick={() => removeElement(sectionIndex, index)}
            >
              წაშლა
            </Button>
          </div>
        </Card>
      );
    },
    []
  );

  const moveSection = useCallback((dragIndex: number, hoverIndex: number) => {
    form.setValue(
      `sections`,
      form.getValues(`sections`).map((section, i) => {
        if (i === dragIndex) {
          return form.getValues(`sections`)[hoverIndex];
        } else if (i === hoverIndex) {
          return form.getValues(`sections`)[dragIndex];
        }
        return section;
      })
    );
  }, []);

  function changeSectionValue(index: number, value: string) {
    form.setValue(
      `sections`,
      form.getValues(`sections`).map((section, i) => {
        if (i === index) {
          return {
            ...section,
            value,
          };
        }
        return section;
      })
    );
  }

  function removeSection(index: number) {
    form.setValue(
      `sections`,
      form.getValues(`sections`).filter((_, i) => i !== index)
    );
  }

  const renderSection = useCallback(
    (
      section: {
        id: string;
        value: string;
        elements: { id: string; value: string }[];
      },
      index: number
    ) => {
      return (
        <Card
          type={`section`}
          key={section.id}
          index={index}
          id={section.id}
          moveCard={(dragIndex, hoverIndex) =>
            // moveElement(dragIndex, hoverIndex, sectionIndex)
            moveSection(dragIndex, hoverIndex)
          }
        >
          <AccordionItem key={section.id} value={section.id} className="w-full">
            <AccordionTrigger>{section.value}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5">
              <Input
                defaultValue={section.value}
                onChange={(e) => changeSectionValue(index, e.target.value)}
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => removeSection(index)}
              >
                წაშალე სექცია
              </Button>
              <div className="">
                <div className="space-y-4 w-full">
                  {section.elements.map((card, i) =>
                    renderElement(
                      {
                        id: card.id,
                        value: card.value,
                      },
                      i,
                      index
                    )
                  )}
                  <Button
                    type="button"
                    onClick={() => {
                      form.setValue(
                        "sections",
                        form.getValues("sections").map((s, i) => {
                          if (i === index) {
                            return {
                              ...s,
                              elements: [
                                ...s.elements,
                                {
                                  id: Math.random().toString(), // some uuid in future
                                  value: "",
                                  order: s.elements.length,
                                },
                              ],
                            };
                          }
                          return s;
                        })
                      );
                    }}
                  >
                    დაამატე ელემენტი
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Card>
      );
    },
    []
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="sections"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-4">
                <Accordion type="multiple" className="w-full">
                  {field.value.map((section, index) =>
                    renderSection(section, index)
                  )}
                </Accordion>
              </div>
            </FormItem>
          )}
        />
        {/* button to add new section */}
        <div className="flex flex-col gap-4 items-start">
          <Button
            type="button"
            className=""
            onClick={() => {
              form.setValue("sections", [
                ...form.getValues("sections"),
                {
                  id: Math.random().toString(), // some uuid in future
                  value: "",
                  order: form.getValues("sections").length,
                  elements: [],
                },
              ]);
            }}
          >
            დაამატე სექცია
          </Button>
          <Button type="submit">შენახვა</Button>
        </div>
      </form>
    </Form>
  );
}
