import ChipSelector from "../components/ChipSelector";
import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";

import INTERESTS from "../../../data/interests";

export default function InterestsStep({

profile,

setProfile,

}){

return(

<StepCard>

<SectionTitle

icon="❤️"

title="Your Interests"

subtitle="Help us personalize your stories."

/>

<ChipSelector

items={INTERESTS}

selected={profile.interests}

setSelected={(interests)=>setProfile({

...profile,

interests,

})}

/>

</StepCard>

);

}