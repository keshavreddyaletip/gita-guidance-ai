import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";
import LanguageCard from "../components/LanguageCard";

import LANGUAGES from "../../../constants/languages";
import GUIDANCE_STYLES from "../../../constants/guidanceStyles";

export default function LearningStep({

  profile,

  setProfile,

}) {

  return (

    <StepCard>

      <SectionTitle

        icon="🌍"

        title="Reading Experience"

        subtitle="Choose how Krishna should guide you."

      />

      <h2 className="font-bold mb-4">

        Preferred Reading Experience

      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {LANGUAGES.map(language=>(

          <LanguageCard

            key={language}

            language={language}

            selected={profile.preferredLanguage===language}

            onClick={()=>setProfile({

              ...profile,

              preferredLanguage:language,

            })}

          />

        ))}

      </div>

      <div className="mt-12">

        <h2 className="font-bold mb-4">

          Guidance Style

        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {GUIDANCE_STYLES.map(style=>(

            <LanguageCard

              key={style}

              language={style}

              selected={profile.guidanceStyle===style}

              onClick={()=>setProfile({

                ...profile,

                guidanceStyle:style,

              })}

            />

          ))}

        </div>

      </div>

    </StepCard>

  );

}