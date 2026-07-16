import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";

export default function CareerStep({

profile,

setProfile,

}){

function update(field,value){

setProfile({

...profile,

[field]:value,

});

}

return(

<StepCard>

<SectionTitle

icon="🎓"

title="Education & Career"

subtitle="This helps Krishna relate stories to your profession."

/>

<SelectField

label="Qualification"

value={profile.qualification}

options={[

"School",

"Intermediate",

"Diploma",

"UG Student",

"Graduate",

"Post Graduate",

"PhD"

]}

onChange={(e)=>update("qualification",e.target.value)}

/>

<InputField

label="Occupation"

value={profile.occupation}

placeholder="Student"

onChange={(e)=>update("occupation",e.target.value)}

/>

<InputField

label="College / Organization"

value={profile.organization}

placeholder="Guru Nanak Institute of Technology"

onChange={(e)=>update("organization",e.target.value)}

/>

</StepCard>

);

}