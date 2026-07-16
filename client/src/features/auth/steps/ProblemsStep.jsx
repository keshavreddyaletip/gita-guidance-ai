import ChipSelector from "../components/ChipSelector";
import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";

import PROBLEMS from "../../../constants/problems";

export default function ProblemsStep({

profile,

setProfile,

}){

return(

<StepCard>

<SectionTitle

icon="💭"

title="Current Challenges"

subtitle="Select all that apply."

/>

<ChipSelector

items={PROBLEMS}

selected={profile.problems}

setSelected={(problems)=>setProfile({

...profile,

problems,

})}

/>

</StepCard>

);

}