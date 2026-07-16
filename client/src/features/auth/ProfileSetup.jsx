import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";

import ProgressBar from "./components/ProgressBar";
import WizardButtons from "./components/WizardButtons";

import profileTemplate from "./data/profileTemplate";

// Steps
import WelcomeStep from "./steps/WelcomeStep";
import PersonalStep from "./steps/PersonalStep";
import CareerStep from "./steps/CareerStep";
import SpiritualStep from "./steps/SpiritualStep";
import LearningStep from "./steps/LearningStep";
import GoalsStep from "./steps/GoalsStep";
import ProblemsStep from "./steps/ProblemsStep";
import KrishnaStep from "./steps/KrishnaStep";
import InterestsStep from "./steps/InterestsStep";
import ReviewStep from "./steps/ReviewStep";

import { saveProfile } from "../../services/profileService";
import { auth } from "../../config/firebase";

export default function ProfileSetup() {

  const navigate = useNavigate();

  //-----------------------------------

  const [profile, setProfile] = useState(profileTemplate);

  const [currentStep, setCurrentStep] = useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  //-----------------------------------

  const steps = [

    WelcomeStep,

    PersonalStep,

    CareerStep,

    SpiritualStep,

    LearningStep,

    GoalsStep,

    ProblemsStep,

    KrishnaStep,

    InterestsStep,

    ReviewStep,

  ];

  const StepComponent = steps[currentStep];

  //-----------------------------------

  function validateStep() {

    setError("");

    switch (currentStep) {

      case 1:

        if (!profile.name.trim()) {
          setError("Please enter your name.");
          return false;
        }

        if (!profile.age) {
          setError("Please enter your age.");
          return false;
        }

        return true;

      case 2:

        if (!profile.occupation.trim()) {
          setError("Please enter your occupation.");
          return false;
        }

        return true;

      case 5:

        if (profile.goals.length === 0) {
          setError("Select at least one goal.");
          return false;
        }

        return true;

      case 6:

        if (profile.problems.length === 0) {
          setError("Select at least one challenge.");
          return false;
        }

        return true;

      default:

        return true;

    }

  }

  //-----------------------------------

  function nextStep() {

    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {

      setCurrentStep((prev) => prev + 1);

      window.scrollTo({

        top: 0,

        behavior: "smooth",

      });

    }

  }

  //-----------------------------------

  function previousStep() {

    if (currentStep > 0) {

      setCurrentStep((prev) => prev - 1);

      window.scrollTo({

        top: 0,

        behavior: "smooth",

      });

    }

  }

  //-----------------------------------

async function finishProfile() {

  try {

    setLoading(true);

    const user = auth.currentUser;

    if (!user) {
      throw new Error("User not logged in.");
    }

    await saveProfile(user.uid, profile);

    console.log("✅ Profile saved successfully.");

    navigate("/");

  } catch (err) {

    console.error(err);

    alert("Failed to save profile.");

    setLoading(false);

  }

}

  //-----------------------------------

  function handleNext() {

    if (currentStep === steps.length - 1) {

      finishProfile();

      return;

    }

    nextStep();

  }

  //-----------------------------------

  if (loading) {

    return (

      <MainLayout>

        <div className="min-h-screen flex items-center justify-center">

          <div className="text-center">

            <div className="text-7xl mb-8">

              🪷

            </div>

            <h1 className="text-4xl font-bold text-indigo-900">

              Creating Your Spiritual Profile

            </h1>

            <p className="mt-6 text-gray-500">

              Understanding your journey...

            </p>

            <div className="mt-10">

              <div className="w-96 h-3 bg-gray-200 rounded-full overflow-hidden">

                <div className="h-full bg-indigo-700 animate-pulse w-full"/>

              </div>

            </div>

          </div>

        </div>

      </MainLayout>

    );

  }

  //-----------------------------------

  return (

    <MainLayout>

      <div className="max-w-5xl mx-auto py-10">

        <ProgressBar

          currentStep={currentStep + 1}

          totalSteps={steps.length}

        />

        <div className="transition-all duration-500">

          <StepComponent

            profile={profile}

            setProfile={setProfile}

            onNext={nextStep}

          />

        </div>

        {error && (

          <div className="mt-6 bg-red-50 border border-red-300 rounded-xl p-4 text-red-600">

            {error}

          </div>

        )}

        {currentStep !== 0 && (

          <WizardButtons

            step={currentStep + 1}

            totalSteps={steps.length}

            onNext={handleNext}

            onPrevious={previousStep}

          />

        )}

      </div>

    </MainLayout>

  );

}