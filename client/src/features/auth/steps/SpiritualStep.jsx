import SelectField from "../components/SelectField";
import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";

export default function SpiritualStep({

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

        icon="🪷"

        title="Spiritual Profile"

        subtitle="Help us understand your spiritual journey."

      />

      <SelectField

        label="Have you read Bhagavad Gita before?"

        value={profile.readBefore}

        options={[

          "No",

          "A Little",

          "Yes"

        ]}

        onChange={(e)=>update("readBefore",e.target.value)}

      />

      <SelectField

        label="Reading Level"

        value={profile.readingLevel}

        options={[

          "Beginner",

          "Intermediate",

          "Advanced"

        ]}

        onChange={(e)=>update("readingLevel",e.target.value)}

      />

      <SelectField

        label="Purpose"

        value={profile.purpose}

        options={[

          "Self Improvement",

          "Peace",

          "Devotion",

          "Learning",

          "Life Guidance"

        ]}

        onChange={(e)=>update("purpose",e.target.value)}

      />

    </StepCard>

  );

}