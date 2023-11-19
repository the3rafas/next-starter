import { executeGraphQL } from "@/libs/graphql";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
export default function ProjectsComponent({
  searchKey,
}: {
  searchKey?: string;
}) {
  const data = [
    {
      name: "Apple MacBook Pro 17'",
      color: "Silver",
      Category: "Laptop",
      lastDeployed: "2022-01-01",
      Price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      Category: "Laptop PC",
      lastDeployed: "2022-01-01",
      Price: "$1999",
    },
    {
      name: " Magic Mouse 2",
      color: "Black",
      Category: "Accessories",
      lastDeployed: "2022-01-01",
      Price: "$99",
    },
  ];

  return (
    <section>
      <div className="flex justify-end">
        <div>
          <button
            type="button"
            className="py-2.5 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Active
          </button>
          <button
            type="button"
            className="py-2.5 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Suspended
          </button>
          <button
            type="button"
            className="py-2.5 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            All
          </button>
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  RunTime
                </th>
                <th scope="col" className="px-6 py-3">
                  Last deploy
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr className="border-b" key={index}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.color}</td>
                    <td className="px-6 py-4">{item.Category}</td>
                    <td className="px-6 py-4">{item.Price}</td>
                    <td className="px-6 py-4">{item.lastDeployed}</td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <RxDotsHorizontal />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
