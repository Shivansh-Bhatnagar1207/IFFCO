import React from "react";
import ReportCard from "./ReportCard";

export default function ReportDetials() {
  const data = [
    {
      title: "xyz",
      head: "kakashi",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.",
      status: "Pending",
    },
    {
      title: "abc",
      head: "roshi",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.",
      status: "Pending",
    },
    {
      title: "shi",
      head: "rimaru",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.",
      status: "Pending",
    },
    {
      title: "ays",
      head: "boa",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias eum velit, fuga voluptate blanditiis. Soluta earum accusamus aliquid quisquam quibusdam tempore. Modi, veniam nam. Perferendis excepturi rerum et veritatis.",
      status: "Pending",
    },
  ];
  return (
    <div className="w-screen h-screen bg-bgc overflow-auto ">
      <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
        Report
      </header>
      <section>
        <h2 className="p-3 text-2xl font-bold ">Report</h2>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="grid gap-3 px-5 my-4">
          {data.map((dat, i) => (
            <ReportCard
              key={i}
              title={dat.title}
              head={dat.head}
              desc={dat.desc}
              status={dat.status}
            />
          ))}
          
        </div>
      </section>
    </div>
  );
}
