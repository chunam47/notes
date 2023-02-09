import { Folder } from "@redux/notes";

export const data: Folder[] = [
  {
    id: crypto.randomUUID(),
    title: "Notes name",

    notes: [
      {
        id: crypto.randomUUID(),
        title: "note name 1",
        created_at: "14/11/2022",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam wisi enim ad minim veniam|",
      },
      {
        id: crypto.randomUUID(),
        title: "note name 2",
        created_at: "14/11/2022",
        content: "Lorem ipsum dolor sit amet, ",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Folder 1",
    notes: []
  },
];
