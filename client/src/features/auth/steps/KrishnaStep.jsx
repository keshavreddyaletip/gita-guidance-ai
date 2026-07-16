import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";
import TextAreaField from "../components/TextAreaField";

export default function KrishnaStep({

profile,

setProfile,

}){

return(

<StepCard>

<SectionTitle

icon="🪷"

title="Tell Krishna"

subtitle="Share whatever is in your heart."

/>

<TextAreaField

label="What challenge are you facing today?"

value={profile.customProblem}

placeholder="Example: I'm preparing for placements but I lose confidence before interviews..."

onChange={(e)=>setProfile({

...profile,

customProblem:e.target.value,

})}

/>

</StepCard>

);

}