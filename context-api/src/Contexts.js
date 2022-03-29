import { createContext } from "react";

const UniversityContext =createContext();
const StudentContext =createContext();

const UniversityProvider=UniversityContext.Provider
const UniversityConsumer=UniversityContext.Consumer

const StudentProvider=StudentContext.Provider
const StudentConsumer=StudentContext.Consumer

export {
    UniversityProvider, 
    UniversityConsumer, 
    StudentProvider,
    StudentConsumer, 
    UniversityContext,
    StudentContext
}