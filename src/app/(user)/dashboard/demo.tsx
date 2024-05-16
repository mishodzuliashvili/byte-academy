"use client";
import { AreaChart } from "@mantine/charts";
import "@mantine/charts/styles.css";

export const data = [
  {
    date: "22 მაისი",
    ბიტი: 2452,
    დრო: 2000,
  },
  {
    date: "23 მაისი",
    ბიტი: 2402,
    დრო: 500,
  },
  {
    date: "24 მაისი",
    ბიტი: 1821,
    დრო: 1000,
  },
  {
    date: "25 მაისი",
    ბიტი: 2809,
    დრო: 1500,
  },
  {
    date: "26 მაისი",
    ბიტი: 2290,
    დრო: 2000,
  },
];

export function Demo() {
  return (
    <AreaChart
      // h={300}
      className="p-5 pt-10 h-full"
      data={data}
      dataKey="date"
      series={[
        { name: "ბიტი", color: "#3f76ed" },
        {
          name: "დრო",
          color: "#2cc766",
          label: "დრო წთ",
        },
      ]}
      curveType="linear"
    />
  );
}
