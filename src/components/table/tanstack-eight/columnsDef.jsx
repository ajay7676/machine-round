import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();

export const columnsDef = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "Full Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];

// cell merge example
const columnDefWithCellMerge = [
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "Name",
  },
];

export const columnsDefWithGrouping = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  {
    header: "Name",
    columns: [
      {
        accessorFn: (row) => `${row.first_name}`,
        header: "Full Name",
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
      },
    ],
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
