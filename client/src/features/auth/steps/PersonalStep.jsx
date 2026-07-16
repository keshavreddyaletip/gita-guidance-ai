import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";

export default function PersonalStep({

  profile,

  setProfile,

}) {

  function update(field, value) {

    setProfile({

      ...profile,

      [field]: value,

    });

  }

  return (

    <StepCard>

      <SectionTitle

        icon="👤"

        title="Personal Information"

        subtitle="Tell us a little about yourself."

      />

      <InputField

        label="Full Name"

        value={profile.name}

        placeholder="Enter your name"

        onChange={(e)=>update("name",e.target.value)}

      />

      <InputField

        label="Age"

        type="number"

        value={profile.age}

        placeholder="Enter your age"

        onChange={(e)=>update("age",e.target.value)}

      />

      <SelectField

        label="Gender"

        value={profile.gender}

        options={[

          "Male",

          "Female",

          "Other",

          "Prefer not to say"

        ]}

        onChange={(e)=>update("gender",e.target.value)}

      />

      <InputField

        label="City"

        value={profile.city}

        placeholder="Hyderabad"

        onChange={(e)=>update("city",e.target.value)}

      />

      <InputField

        label="Country"

        value={profile.country}

        placeholder="India"

        onChange={(e)=>update("country",e.target.value)}

      />

    </StepCard>

  );

}