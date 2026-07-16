interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}
interface PersonOptions {
    name: string;
    birthdate: string;
}
export declare const buildMakePerson: ({ getAge, getUUID, }: BuildMakePersonOptions) => ({ name, birthdate }: PersonOptions) => {
    id: string;
    name: string;
    birthdate: string;
    age: number;
};
export {};
//# sourceMappingURL=05-factory.d.ts.map