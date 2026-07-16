import ChipSelector from "../components/ChipSelector";
import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";

import GOALS from "../../../constants/goals";

export default function GoalsStep({

profile,

setProfile,

}){

return(

<StepCard>

<SectionTitle

icon="🎯"

title="Life Goals"

subtitle="Select every goal important to you."

/>

<ChipSelector

items={GOALS}

selected={profile.goals}

setSelected={(goals)=>setProfile({

...profile,

goals,

})}

/>

</StepCard>

);

}