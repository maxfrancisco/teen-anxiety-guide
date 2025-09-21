import { useState } from "react";
import { LandingPage } from "@/components/LandingPage";
import { AssessmentForm } from "@/components/AssessmentForm";

const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return <AssessmentForm />;
  }

  return <LandingPage onStartAssessment={() => setShowAssessment(true)} />;
};

export default Index;
