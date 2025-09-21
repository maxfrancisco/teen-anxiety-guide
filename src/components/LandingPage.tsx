import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";

interface LandingPageProps {
  onStartAssessment: () => void;
}

export const LandingPage = ({ onStartAssessment }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-therapeutic shadow-therapeutic animate-gentle-bounce">
              <Heart className="h-12 w-12 text-therapeutic-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Youth Anxiety Assessment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up">
            A compassionate, evidence-based screening tool for generalized anxiety disorder in children and teens aged 11-17.
            Based on the DSM-5 clinical assessment.
          </p>
          <Button
            onClick={onStartAssessment}
            size="lg"
            className="bg-therapeutic hover:bg-therapeutic/90 text-therapeutic-foreground px-8 py-4 text-lg font-medium shadow-therapeutic animate-slide-up"
          >
            Begin Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card shadow-card border-0 animate-slide-up">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 rounded-full bg-therapeutic/10 w-fit mb-4">
                <Shield className="h-8 w-8 text-therapeutic" />
              </div>
              <CardTitle className="text-xl text-foreground">Private & Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                Your responses are completely confidential and stored securely. No personal information is required.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0 animate-slide-up">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 rounded-full bg-calming/10 w-fit mb-4">
                <Clock className="h-8 w-8 text-calming" />
              </div>
              <CardTitle className="text-xl text-foreground">Quick & Easy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                Complete the 10-question assessment in just 3-5 minutes with immediate, actionable results.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0 animate-slide-up">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 rounded-full bg-support/10 w-fit mb-4">
                <Users className="h-8 w-8 text-support" />
              </div>
              <CardTitle className="text-xl text-foreground">Clinically Validated</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                Based on the American Psychiatric Association's DSM-5 severity measure for anxiety assessment.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <Card className="bg-background/80 backdrop-blur-sm shadow-card border-therapeutic/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground mb-4">
              Understanding Youth Anxiety
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Anxiety is one of the most common mental health challenges affecting young people today. 
              Early identification and support can make a significant difference in a child's wellbeing and development.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-calming" />
                  When to Consider Assessment
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Persistent worry about everyday activities</li>
                  <li>• Physical symptoms like headaches or stomachaches</li>
                  <li>• Avoiding school or social situations</li>
                  <li>• Sleep difficulties or restlessness</li>
                  <li>• Difficulty concentrating</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-therapeutic" />
                  What This Assessment Provides
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Standardized anxiety severity scoring</li>
                  <li>• Clear, age-appropriate recommendations</li>
                  <li>• Guidance on next steps for support</li>
                  <li>• Educational resources for families</li>
                  <li>• Professional referral suggestions</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                Remember: This assessment is a screening tool, not a diagnosis. 
                Professional consultation is always recommended for comprehensive evaluation.
              </p>
              <Button
                onClick={onStartAssessment}
                className="bg-therapeutic hover:bg-therapeutic/90 text-therapeutic-foreground"
              >
                Start Your Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};