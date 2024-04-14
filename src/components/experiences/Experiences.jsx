import { getExperiences } from "@/data/experiences.data"

export default function Experiences({ stateName = 'No State Selected'}) {
    const experienceData = getExperiences(stateName);
    return (
        <div className="p-3">
            <h2 className="text-2xl font-bold text-center my-4">Experiencias en {stateName}</h2>
            <div className="w-full">
                <ExperienceList data={experienceData} />
            </div>
        </div>
    )
}