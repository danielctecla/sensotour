export default function Experiencia() {
    const params = useParams();
    return (
      <div className="">
        <CompleteExperience experience={params.id}/>
      </div>
    )
} 