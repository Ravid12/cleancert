import { Card } from 'primereact/card';


import "./ConsumerLandingPage.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from 'primereact/button';


export const ConsumerLandingPage = () => {
  const en = {
      main: {
        title: "The Sustainable Coconut."
      },
      mission: {
        title: "Our mission",
        body: "Promoting sustainable agriculture practices by encouraging consumers to make responsible food choices."
      },
      howToHelp: {
        title: "How you can help",
        body: `When you purchase a product with \xa0\xa0\xa0 The Sustainable Coconut certification on, a percentage of the profits is shared directly back into the farmers pockets. We can do this by enabling brands to charge a premium for the sustainably sourced ingredients they use. This creates a future where all people have an opportunity for a better life.`,
        button: 'Support farmers with a donation'
      },
      meetFarmers: {
        title: "Meet the farmers",
        body: "Get to know the people you are heling."
      },
      recycle: {
        title: "Recycle your bottles",
        body: "Keep our environment clean by giving your empty bottles back to us. Order a collection and we will pick it up when we are next in your neighourhood.",
        button: "Request a collection"
      }
    }

  return (
    <div className="coco-landing-page">
      <div className="coco-header-container">
        <img className="coco-header-image" alt="logo-heading" src={require('./res/header.png')}/>
      </div>
      <div className='coco-title-card p-4 text-5xl font-bold'>
        {en.main.title}
      </div>
      <div className='mission-card p-4 pt-5'>
        <div className='mission-card-title text-3xl mb-3 font-semibold'>
          {en.mission.title}
        </div>
        <div className='mission-card-text font-light text-xl'>
          {en.mission.body}
        </div>
      </div>
      <div className='howToHelp-card p-4 pt-5'>
        <div className='howToHelp-card-title text-3xl mb-3 font-semibold'>
          {en.howToHelp.title}
        </div>
        <div className='howToHelp-card-text font-light text-xl mb-5'>
          {en.howToHelp.body}
        </div>
        <Button label={en.howToHelp.button} className="p-button-raised p-button-rounded green text-lg font-medium join mb-5" />

      </div>

      <div className='farmers-card p-4 pt-5'>
        <div className='farmers-card-title text-3xl mb-3 font-semibold'>
          {en.meetFarmers.title}
        </div>
        <div className='farmers-card-text font-light text-xl mb-4'>
          {en.meetFarmers.body}
        </div>
        <img className="farmers-image mb-6" alt="background" src={require('./res/farmer.png')}/>
        <img className="farmers-image" alt="background" src={require('./res/nutrition.png')}/>

      </div>

      <div className='recycle-card p-4 pt-5'>
        <div className='recycle-card-title text-3xl mb-3 font-semibold'>
          {en.recycle.title}
        </div>
        <div className='recycle-card-text font-light text-xl mb-5'>
          {en.recycle.body}
        </div>
        <Button label={en.recycle.button} className="p-button-raised p-button-rounded yellow text-lg font-medium join mb-5" />

      </div>

    </div>
  )
}
