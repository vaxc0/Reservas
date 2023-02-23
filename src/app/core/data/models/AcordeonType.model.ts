import { Acordeon } from "../interfaces/Acordeon.interface";

export class AcordeonType implements Acordeon {
    constructor(
        public title: string,
        public content: string,
    ) { }
}