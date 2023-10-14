import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {
  private quotes = [
    {
      text: "To suffer some anxiety, some depression, some failure is normal...",
      link: "https://hrd.byu.edu/emotionalwellbeing",
      category: "Resilience and Coping"
    },
    {
      text: "Everyone feels stressed from time to time...",
      link: "https://www.nih.gov/health-information/emotional-wellness-toolkit",
      category: "Stress Management"
    },
    {
      text: "To fit in everything we want to do in our day, we often sacrifice sleep...",
      link: "https://www.nih.gov/health-information/emotional-wellness-toolkit",
      category: "Sleep and Rest"
    },
    {
      text: "Social connections might help protect health and lengthen life...",
      link: "https://www.nih.gov/health-information/emotional-wellness-toolkit",
      category: "Social Connections and Support Systems"
    },
    {
      text: "The concept of mindfulness is simple...",
      link: "https://www.nih.gov/health-information/emotional-wellness-toolkit",
      category: "Emotional Awareness and Mindfulness"
    },
    {
      text: "Experts have suggested that the best way to help people make healthy diet and lifestyle change is at the large-scale, population level, through public health efforts and policy changes.",
      link: "https://www.hsph.harvard.edu/obesity-prevention-source/obesity-causes/diet-and-weight/",
      category: "Diet and Lifestyle"
    },
    {
      text: "The choices people make in their daily lives can have a profound effect on their mental health.",
      link: "https://www.nih.gov/health-information/emotional-wellness-toolkit",
      category: "Mental Health and Choices"
    },
    {
      text: "Research suggests that people with a positive attitude live longer and enjoy better health than their negative counterparts.",
      link: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/positive-thinking/art-20043950",
      category: "Positivity and Health"
    },
    {
      text: "Support from people like you and community resources can make it easier to live a healthier lifestyle.",
      link: "https://www.nih.gov/health-information/emotional-wellness-toolkit",
      category: "Support Systems"
    }
  ];

  getQuotesByCategory(category: string) {
    return this.quotes.filter(quote => quote.category === category);
  }
}
