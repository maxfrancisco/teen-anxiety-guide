import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Info, RefreshCw, Download } from "lucide-react";

interface AssessmentResultsProps {
  score: number;
  responses: Record<number, string>;
}

export const AssessmentResults = ({ score, responses }: AssessmentResultsProps) => {
  const getSeverityLevel = (score: number) => {
    if (score <= 7) return { level: "Minimal", color: "bg-calming text-calming-foreground", icon: CheckCircle };
    if (score <= 13) return { level: "Mild", color: "bg-support text-support-foreground", icon: Info };
    if (score <= 19) return { level: "Moderate", color: "bg-primary text-primary-foreground", icon: AlertCircle };
    return { level: "Severe", color: "bg-destructive text-destructive-foreground", icon: AlertCircle };
  };

  const severity = getSeverityLevel(score);
  const IconComponent = severity.icon;

  const getRecommendation = (score: number) => {
    if (score <= 7) {
      return "Your responses suggest minimal anxiety symptoms. Continue with healthy coping strategies and regular self-care.";
    }
    if (score <= 13) {
      return "Your responses suggest mild anxiety symptoms. Consider discussing these feelings with a trusted adult, school counselor, or healthcare provider.";
    }
    if (score <= 19) {
      return "Your responses suggest moderate anxiety symptoms. It would be beneficial to speak with a mental health professional for support and guidance.";
    }
    return "Your responses suggest severe anxiety symptoms. Please reach out to a mental health professional, trusted adult, or crisis support service as soon as possible.";
  };

  const resetAssessment = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-calm p-4 flex items-center justify-center">
      <Card className="w-full max-w-3xl bg-gradient-card shadow-card border-0 animate-fade-in">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 rounded-full bg-therapeutic/10">
              <IconComponent className="h-10 w-10 text-therapeutic" />
            </div>
          </div>
          <CardTitle className="text-3xl font-semibold text-foreground mb-2">
            Assessment Complete
          </CardTitle>
          <CardDescription className="text-muted-foreground text-lg">
            Your GAD-7 Assessment Results
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-therapeutic-light/50 border border-therapeutic/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-therapeutic mb-1">{score}</div>
                <div className="text-sm text-muted-foreground">Total Score</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <Badge className={`${severity.color} text-sm px-3 py-1`}>
                  {severity.level} Anxiety
                </Badge>
              </div>
            </div>
          </div>

          <Card className="bg-background/50 border-therapeutic/20">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-therapeutic" />
                Understanding Your Results
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                {getRecommendation(score)}
              </p>
              
              <div className="bg-therapeutic-light/30 rounded-lg p-4 border border-therapeutic/20">
                <h4 className="font-medium text-foreground mb-2">Score Interpretation:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div className="text-center p-2 rounded bg-calming/20">
                    <div className="font-medium">0-7</div>
                    <div className="text-xs text-muted-foreground">Minimal</div>
                  </div>
                  <div className="text-center p-2 rounded bg-support/20">
                    <div className="font-medium">8-13</div>
                    <div className="text-xs text-muted-foreground">Mild</div>
                  </div>
                  <div className="text-center p-2 rounded bg-primary/20">
                    <div className="font-medium">14-19</div>
                    <div className="text-xs text-muted-foreground">Moderate</div>
                  </div>
                  <div className="text-center p-2 rounded bg-destructive/20">
                    <div className="font-medium">20-40</div>
                    <div className="text-xs text-muted-foreground">Severe</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-calming/20">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Important Reminders</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-calming mt-1 flex-shrink-0" />
                  <span className="text-sm">This assessment is a screening tool, not a diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-calming mt-1 flex-shrink-0" />
                  <span className="text-sm">Professional consultation is recommended for comprehensive evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-calming mt-1 flex-shrink-0" />
                  <span className="text-sm">Crisis support is available 24/7 if you need immediate help</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              onClick={resetAssessment}
              variant="outline"
              className="flex items-center gap-2 flex-1"
            >
              <RefreshCw className="h-4 w-4" />
              Take Assessment Again
            </Button>
            <Button
              onClick={() => window.print()}
              className="flex items-center gap-2 flex-1 bg-therapeutic hover:bg-therapeutic/90 text-therapeutic-foreground"
            >
              <Download className="h-4 w-4" />
              Save Results
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Based on the DSM-5 Severity Measure for Generalized Anxiety Disorder (Child Age 11–17)
              <br />
              © American Psychiatric Association
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};