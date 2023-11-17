import z from "zod";

const idSchema = z.string();
const exampleSchema = z.object({
    id: idSchema,
    name: z
        .string({ required_error: "Name is required." })
        .trim()
        .min(1, "Name cannot be empty."),
    email: z
        .string({ required_error: "Email is required." })
        .trim()
        .min(1, "Email cannot be empty.")
        .email("Invalid email."),
    role: z.enum(["admin", "user"], { invalid_type_error: "Invalid role." }),
});
const createExampleSchema = exampleSchema.omit({ id: true });
const updateExampleSchema = createExampleSchema.partial();

type Example = z.infer<typeof exampleSchema>;
type CreateExample = z.infer<typeof createExampleSchema>;
type UpdateExample = z.infer<typeof updateExampleSchema>;

const exampleData: Example[] = [
    { id: "1700184314435", name: "Joe", email: "joe@email.com", role: "admin" },
    {
        id: "1700184329028",
        name: "Patrick",
        email: "patrick@email.com",
        role: "user",
    },
];

function getAll(): Example[] {
    return exampleData;
}

function getById(id: string): Example | undefined {
    return exampleData.find((d) => d.id === id);
}

function create(example: CreateExample): Example {
    const id = Date.now().toString();

    const newExample = { id, ...example };

    exampleData.push(newExample);

    return newExample;
}

function update(id: string, example: UpdateExample): Example | undefined {
    const index = exampleData.findIndex((d) => d.id === id);
    const exampleToUpdate = exampleData[index];

    exampleData.splice(index, 1, { ...exampleToUpdate, ...example });

    return exampleData[index];
}

function remove(id: string): void {
    const index = exampleData.findIndex((d) => d.id === id);

    exampleData.splice(index, 1);
}

export const ExampleModel = {
    getAll,
    getById,
    create,
    update,
    remove,
} as const;

export const ExampleSchemas = {
    idSchema,
    exampleSchema,
    createExampleSchema,
    updateExampleSchema,
} as const;
