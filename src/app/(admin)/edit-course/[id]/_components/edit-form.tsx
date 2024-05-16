"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AsyncCreatableSelect from "react-select/async-creatable";
import { Course, Prisma, User } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OptionProps, components } from "react-select";
import AsyncSelect from "react-select/async";
import editCourse from "@/actions/courses/edit-course";
import { useState } from "react";
import { Avatar, Group, Text, Tooltip, em } from "@mantine/core";
import searchUsersByNameOrEmail from "@/actions/users/search-users-by-name-or-email";
import { Textarea } from "@/components/ui/textarea";
import searchWhatYouNeedByValue from "@/actions/courses/search-what-you-need-by-value";
import searchWhoIsCourseForByValue from "@/actions/courses/search-who-is-this-course-for-by-value";
import searchWhatYouWillLearnByValue from "@/actions/courses/search-what-you-will-learn-by-value";

const formSchema = z.object({
  title: z.string().min(3),
  heading: z.string().min(3),
  description: z.string().min(3),
  imgUrl: z.string().url(),
  priceInMonth: z.number().int().positive(),
  ageFrom: z.number().int().positive(),
  maxStudents: z.number().int().positive(),
  durationInWeeks: z.number().int().positive(),
  durationInHoursPerWeek: z.number().int().positive(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  registrationDate: z.date(),
  finishDate: z.date(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  authors: z.array(z.string()),
  whatYouNeed: z.array(z.string()),
  whatYouWillLearn: z.array(z.string()),
  whoIsThisCourseFor: z.array(z.string()),
});

type EditFormProps = {
  courseId: string;
  course: Prisma.CourseGetPayload<{
    include: {
      authors: true;
      whatYouNeed: true;
      whatYouWillLearn: true;
      whoIsThisCourseFor: true;
    };
  }>;
};

export default function EditForm({ courseId, course }: EditFormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: course.title,
      heading: course.heading,
      description: course.description,
      imgUrl: course.imgUrl,
      priceInMonth: course.priceInMonth,
      ageFrom: course.ageFrom,
      maxStudents: course.maxStudents,
      durationInWeeks: course.durationInWeeks,
      durationInHoursPerWeek: course.durationInHoursPerWeek,
      status: course.status,
      registrationDate: course.registrationDate,
      finishDate: course.finishDate,
      difficulty: course.difficulty,
      authors: course.authors.map((author) => author.id),
      whatYouNeed: course.whatYouNeed.map((item) => item.value),
      whatYouWillLearn: course.whatYouWillLearn.map((item) => item.value),
      whoIsThisCourseFor: course.whoIsThisCourseFor.map((item) => item.value),
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    setLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await editCourse(courseId, values);
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="whatYouWillLearn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>რას ისწავლი კურსზე</FormLabel>
              <FormControl>
                <AsyncCreatableSelect
                  onChange={(v) => {
                    field.onChange(v.map((user) => user.value));
                  }}
                  defaultValue={
                    course.whatYouWillLearn.map((c) => ({
                      label: c.value,
                      value: c.value,
                    })) as any
                  }
                  isMulti
                  cacheOptions
                  defaultOptions={true}
                  loadOptions={(inputValue: string): Promise<any> => {
                    return new Promise((resolve) => {
                      searchWhatYouWillLearnByValue(inputValue)
                        .then((w) => {
                          resolve(
                            w.map((c) => ({
                              label: c.value,
                              value: c.value,
                            }))
                          );
                        })
                        .catch(() => {
                          resolve([]);
                        });
                    });
                  }}
                />
              </FormControl>
              <FormDescription>This is title of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whoIsThisCourseFor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ვისთვის არის კურსი</FormLabel>
              <FormControl>
                <AsyncCreatableSelect
                  onChange={(v) => {
                    field.onChange(v.map((user) => user.value));
                  }}
                  defaultValue={
                    course.whoIsThisCourseFor.map((c) => ({
                      label: c.value,
                      value: c.value,
                    })) as any
                  }
                  isMulti
                  cacheOptions
                  defaultOptions={true}
                  loadOptions={(inputValue: string): Promise<any> => {
                    return new Promise((resolve) => {
                      searchWhoIsCourseForByValue(inputValue)
                        .then((w) => {
                          resolve(
                            w.map((c) => ({
                              label: c.value,
                              value: c.value,
                            }))
                          );
                        })
                        .catch(() => {
                          resolve([]);
                        });
                    });
                  }}
                />
              </FormControl>
              <FormDescription>This is title of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whatYouNeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>რა გჭირდება კურსზე</FormLabel>
              <FormControl>
                <AsyncCreatableSelect
                  onChange={(v) => {
                    field.onChange(v.map((user) => user.value));
                  }}
                  defaultValue={
                    course.whatYouNeed.map((c) => ({
                      label: c.value,
                      value: c.value,
                    })) as any
                  }
                  isMulti
                  cacheOptions
                  defaultOptions={true}
                  loadOptions={(inputValue: string): Promise<any> => {
                    return new Promise((resolve) => {
                      searchWhatYouNeedByValue(inputValue)
                        .then((w) => {
                          resolve(
                            w.map((c) => ({
                              label: c.value,
                              value: c.value,
                            }))
                          );
                        })
                        .catch(() => {
                          resolve([]);
                        });
                    });
                  }}
                />
              </FormControl>
              <FormDescription>This is title of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="authors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ავტორები</FormLabel>
              <FormControl>
                <AsyncSelect
                  // debounceTimeout={300}
                  onChange={(v) => {
                    // @ts-ignore
                    field.onChange(v.map((user) => user.value));
                  }}
                  defaultValue={
                    course.authors.map((author) => ({
                      label: author.name,
                      value: author.id,
                      email: author.email,
                      profileImage: author.profileImage,
                    })) as any
                  }
                  isMulti
                  cacheOptions
                  defaultOptions={true}
                  components={{
                    Option: (props: OptionProps<User>) => {
                      return (
                        <components.Option {...props}>
                          <Group gap="sm" className="flex items-center gap-3">
                            <Avatar
                              src={props.data.profileImage}
                              size={36}
                              radius="xl"
                              className="w-[36px] h-[36px] rounded-lg"
                            />
                            <div>
                              <Text size="sm">{props.label}</Text>
                              <Text size="xs" opacity={0.5}>
                                {props.data.email}
                              </Text>
                            </div>
                          </Group>
                        </components.Option>
                      );
                    },
                  }}
                  loadOptions={(inputValue: string): Promise<any> => {
                    // console.log(inputValue); TODO how to add debounce here
                    return new Promise((resolve) => {
                      searchUsersByNameOrEmail(inputValue)
                        .then((users) => {
                          resolve(
                            users.map((user) => ({
                              label: user.name,
                              value: user.id,
                              email: user.email,
                              profileImage: user.profileImage,
                            }))
                          );
                        })
                        .catch(() => {
                          resolve([]);
                        });
                    });
                  }}
                />
              </FormControl>
              <FormDescription>This is title of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>სახელი</FormLabel>
              <FormControl>
                <Input placeholder="enter title" {...field} />
              </FormControl>
              <FormDescription>This is title of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heading</FormLabel>
              <FormControl>
                <Input placeholder="enter heading" {...field} />
              </FormControl>
              <FormDescription>This is heading of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="enter description" {...field} />
              </FormControl>
              <FormDescription>This is description of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imgUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Url</FormLabel>
              <FormControl>
                <Input placeholder="enter image url" {...field} />
              </FormControl>
              <FormDescription>This is image url of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priceInMonth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price In Month</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="enter price in month"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>
                This is price in month of course
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ageFrom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age From</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="enter age"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>This is age from of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxStudents"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Students</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="enter num of students"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>This is max students of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="durationInWeeks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration In Weeks</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="enter dur weeks"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>
                This is duration in weeks of course
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="durationInHoursPerWeek"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration In Hours Per Week</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="enter dur in hours"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>
                This is duration in hours per week of course
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                {/* this is select */}
                {/* <Input placeholder="enter status" {...field} /> */}
                <Select
                  value={field.value}
                  onValueChange={(v) => field.onChange(v)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="DRAFT">Draft</SelectItem>
                      <SelectItem value="PUBLISHED">Published</SelectItem>
                      <SelectItem value="ARCHIVED">Archived</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>This is status of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Difficulty</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(v) => field.onChange(v)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="BEGINNER">BEGINNER</SelectItem>
                      <SelectItem value="INTERMEDIATE">INTERMEDIATE</SelectItem>
                      <SelectItem value="ADVANCED">ADVANCED</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>This is difficulty of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registrationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                  value={field.value.toISOString().split("T")[0]}
                />
              </FormControl>
              <FormDescription>
                This is registration date of course
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="finishDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Finish Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                  value={field.value.toISOString().split("T")[0]}
                />
              </FormControl>
              <FormDescription>This is finish date of course</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
