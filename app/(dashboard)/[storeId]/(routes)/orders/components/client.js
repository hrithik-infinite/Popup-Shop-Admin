"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";

export const OrderClient = ({ data }) => {
  return (
    <>
      <Heading title={`Orders ${data.length}`} description="Manage Orders for your store" />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products"></DataTable>
    </>
  );
};
