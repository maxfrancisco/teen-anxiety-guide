import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Heart, Shield } from "lucide-react";
import { AssessmentResults } from "./AssessmentResults";

interface QuestionData {
  id: number;
  text: string;
}

const questions: QuestionData[] = [
  { id: 1, text: "felt moments of sudden terror, fear, or fright" },
  { id: 2, text: "felt anxious, worried, or nervous" },
  { id: 3, text: "had thoughts of bad things happening, such as family tragedy, ill health, loss of a job, or accidents" },
  { id: 4, text: "felt a racing heart, sweaty, trouble breathing, faint, or shaky" },
  { id: 5, text: "felt tense muscles, felt on edge or restless, or had trouble relaxing or trouble sleeping" },
  { id: 6, text: "avoided, or did not approach or enter, situations about which I worry" },
  { id: 7, text: "left situations early or participated only minimally due to worries" },
  { id: 8, text: "spent lots of time making decisions, putting off making decisions, or preparing for situations, due to worries" },
  { id: 9, text: "sought reassurance from others due to worries" },
  { id: 10, text: "needed help to cope with anxiety (e.g., alcohol or medication, superstitious objects, or other people)" }
];

const responseOptions = [
  { value: "0", label: "Never" },
  { value: "1", label: "Occasionally" },
  { value: "2", label: "Half of the time" },
  { value: "3", label: "Most of the time" },
  { value: "4", label: "All of the time" }
];

export const AssessmentForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleResponse = (questionId: number, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(responses).reduce((sum, value) => sum + parseInt(value || "0"), 0);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQuestionData = questions[currentQuestion];
  const hasResponse = responses[currentQuestionData?.id] !== undefined;

  if (showResults) {
    return <AssessmentResults score={calculateScore()} responses={responses} />;
  }

  return (
    <div className="min-h-screen bg-gradient-calm p-4 flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-gradient-card shadow-card border-0">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-therapeutic/10">
              <Heart className="h-8 w-8 text-therapeutic" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold text-foreground mb-2">
            Generalized Anxiety Assessment
          </CardTitle>
          <CardDescription className="text-muted-foreground text-lg">
            Child Age 11–17 • Question {currentQuestion + 1} of {questions.length}
          </CardDescription>
          <Progress value={progress} className="mt-4" />
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              During the <strong>PAST 7 DAYS</strong>, I have...
            </p>
            <h3 className="text-xl font-medium text-foreground leading-relaxed">
              {currentQuestionData?.text}
            </h3>
          </div>

          <RadioGroup
            value={responses[currentQuestionData?.id] || ""}
            onValueChange={(value) => handleResponse(currentQuestionData.id, value)}
            className="space-y-4"
          >
            {responseOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-therapeutic-light/30 transition-colors">
                <RadioGroupItem value={option.value} id={option.value} className="border-therapeutic data-[state=checked]:bg-therapeutic data-[state=checked]:border-therapeutic" />
                <Label htmlFor={option.value} className="flex-1 text-left cursor-pointer text-foreground">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button
              onClick={nextQuestion}
              disabled={!hasResponse}
              className="flex items-center gap-2 bg-therapeutic hover:bg-therapeutic/90 text-therapeutic-foreground"
            >
              {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-border/50">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Your responses are private and secure</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};