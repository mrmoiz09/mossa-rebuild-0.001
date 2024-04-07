import React from 'react'
import { urls } from '../../config/constants'

const Maintanence = () => {
  return (
        <section className="moosa_connect--block py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page__title dark-line mb-5">
                            <h2 className="h6 mb-0">Maintenance</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <ul id="tabs" className="nav nav-tabs mb-3 border-0" role="tablist">
                            <li className="nav-item">
                                <a id="tab-A" href="#pane-A" className="nav-link active" data-toggle="tab" role="tab">Maintenance</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-B" href="#pane-B" className="nav-link" data-toggle="tab" role="tab">Cost of Maintenance</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-C" href="#pane-C" className="nav-link" data-toggle="tab" role="tab">FAQ</a>
                            </li>
                        </ul>                        
                    
                        <div id="content" className="tab-content" role="tablist">
                            <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                                <div className="card-header bg-white" role="tab" id="heading-C">
                                    <h4>General Information:</h4>
                                    <p >It is essential that your vehicle receives the right maintenance to retain the safety, dependability, and performance originally built into your vehicle.</p>
                                    <p >When your odometer reaches the kilometers indicated on the following pages, or the corresponding time interval has been reached, take your vehicle, preferably to an authorized GMC service center, who will provide the proper parts and service.</p>
                                    <p >Once maintenance has been performed, have your dealer fill out and stamp the appropriate box to serve as your maintenance record which may be needed for warranty repairs. It will also show future owners how well your vehicle has been maintained.</p>
                                    <p >To maintain air conditioning efficiency, have an authorized dealer check the system at least once each year. Recommended fluids and lubricants are listed in your Owner’s Manual booklet.</p>
                                    
                                    <h4>Important:</h4>
                                    <p >The engine oil level should be regularly checked and kept at the proper level. Always change the oil as recommended.</p>
                                    
                                    <h4>Caution:</h4>
                                    <p >Maintenance work can be dangerous and you could be seriously injured. Make sure you have the know-how and the proper tools if you select to do any of the maintenance work yourself.</p>
                                        
                                </div>
                                
                            </div>
                    
                            <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                                <div className="card-header bg-white" role="tab" id="heading-B">
                                    <h4 >Convenience, Transparency and Value</h4>
                                    <p >We are committed to delivering a superior service experience to all our Customers. An integral part of that commitment is the high standards we set ourselves in maintaining our customers’ vehicles. By focusing on convenience, transparency, and value, we place the Customer at the very centre of everything we do and seek to exceed their expectations, day in and day out.</p>
                                        
                                    <h4 >Prompt and Reliable Vehicle Service</h4>
                                    <p >We value and respect our customers time. That is why we put Customer convenience above all else. We ensure that appointments are available within 3 working days, or whenever suits the Customer. Through our effective appointment booking system, we follow up with service reminders and provide ‘same-day delivery’ for all Scheduled Maintenance jobs under appointment.</p>
                                    
                                    <h4 >Clear and Competitive Pricing</h4>
                                    <p >Our aim is to provide our customers with the very best cost of ownership for their vehicles by offering cost efficiencies and the most competitive pricing. In addition, our Customers will always be made aware of the cost of any scheduled maintenance or menu priced item thanks to transparent cost estimates, based on clearly communicated prices.</p>
                                    
                                    <h4 >Superior Customer Service Experience</h4>
                                    <p >We deliver superior service from beginning to end. Prior to work commencing, a dedicated Service Advisor explains the work to be done and ensures all Customer requirements will be met. During the service, the Advisor is always on-hand to provide progress updates and clear completion times. The Service Advisor will follow up with the Customer to check their satisfaction and find ways to continually improve our service.</p>
                                    
                                    <h4 >The Highest Standards of Quality</h4>
                                    <p >Our Customers can trust us to deliver the very highest quality standards at all times. We use only genuine GMC parts, specifically designed and certified for GMC vehicles. What’s more, our experienced technicians and Service Center Staff are all GMC certified and continually undergo extensive training to keep them at the very top of their fields.</p>
                                    
                                       
                                </div>
                               
                            </div>
                    
                            <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                            
                                <div className="card-header" role="tab" id="heading-A">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                                           How can I be sure I’m having my GMC’s maintenance performed at the right time?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-A" className="collapse show" data-parent="#content" role="tabpanel" aria-labelledby="heading-A">
                                    <div className="card-body">
                                        We recommend you consult your GMC Owner Manual for the correct maintenance schedule. Click here to download or view select Owner Manuals.
                                    </div>
                                </div>
                                
                                
                                <div className="card-header" role="tab" id="heading-1">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                           What do I need to do when my “Change Engine Oil Soon” message displays?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-1" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-1">
                                    <div className="card-body">
                                        When the “Change Engine Oil Soon” message displays, service is required for your GMC as soon as possible, within the next 1,000 kilometers. If driving under the best conditions, the Engine Oil Life System might not indicate the need for vehicle service for more than a year. The engine oil and filter must be changed at least once a year and the Oil Life System must be reset. Your GMC dealer has trained service technicians who will perform this work and reset the system.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-2">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
                                           I have a 2011 GMC. When should I get my tires rotated?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-2" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-2">
                                    <div className="card-body">
                                       Beginning with the 2011 model year, GMC owners are advised to see their dealer for a tire rotation every 10,000 kilometers as part of a newly revised maintenance schedule.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-3">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
                                           Why are tire rotations so important?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-3" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-3">
                                    <div className="card-body">
                                       Because each tire on your GMC performs a different task, they wear at different rates. Regular rotations allow tires to wear evenly, maximizing tire life, and allowing tires to be replaced in sets of four, which is preferable.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-4">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
                                           I’ve heard that the first tire rotation on my new GMC is the most important. Why is that?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-4" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-4">
                                    <div className="card-body">
                                        Irregular tread wear occurs fastest when tires are new and at full tread depth, thus the first tire rotation has been found to be of the greatest importance.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-5">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
                                           Is it okay to rotate my tires earlier than 10,000 km on a 2011 model year vehicle and newer?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-5" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-5">
                                    <div className="card-body">
                                        Yes, it is okay, particularly if you notice signs of irregular wear appearing on the tires.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-6">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
                                           If I have an older GMC vehicle—for example, model year 2000—does the 10,000 km tire rotation recommendation still apply?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-6" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-6">
                                    <div className="card-body">
                                        While the 2000 Owner Manual recommends a range of 5,000 to 8,000 kilometers, the 10,000 km tire rotation interval is a good rule of thumb. However, any time you notice unusual wear, you should rotate your tires as soon as possible. Check to ensure that your GMC is properly aligned and that there are no suspension issues causing irregular tire wear.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-7">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-7" aria-expanded="true" aria-controls="collapse-7">
                                           My GMC has an Engine Oil Life System. Can I have my tires rotated when I get my oil changed?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-7" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-7">
                                    <div className="card-body">
                                        Yes. For your convenience, you can have both the tire rotation and oil change service completed at the same time, as long as you are rotating the tires approximately 10,000 kilometers.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-8">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-8" aria-expanded="true" aria-controls="collapse-8">
                                           My father always told me that I should change my oil every 5,000 kilometers. Is that still true?
                                           </a>
                                    </h5>
                                </div>
                                <div id="collapse-8" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-8">
                                    <div className="card-body">
                                        The majority of today’s GMC vehicles are equipped with the Engine Oil Life System, which has made the 5,000 km oil change obsolete. Depending on the age of the vehicle, driving habits, and road conditions, vehicles with today’s advanced engines can go much longer than 5,000 kilometers between oil changes. Always be sure to check your engine oil level regularly, even with an Engine Oil Life System.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-9">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-9" aria-expanded="true" aria-controls="collapse-9">
                                           Why is tire pressure important?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-9" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-9">
                                    <div className="card-body">
                                        Improperly inflated tires are a leading cause of tire failure. Proper tire inflation helps a tire have optimum tread contact with the road, which improves traction and braking, and reduces tire wear—this is especially important when hauling cargo or towing. Underinflated tires generate heat, which is the tire’s worst enemy, so maintaining the right amount of air keeps temperatures where they should be and can result in fewer blowouts. Also, keeping tires properly inflated and wheels aligned can help you improve your gas mileage up to 3 percent, according to: fueleconomy.gov..
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-10">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-10" aria-expanded="true" aria-controls="collapse-10">
                                           How often should I check my air pressure?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-10" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-10">
                                    <div className="card-body">
                                       You can check your GMC Owner Manual for specific information on your vehicle, but once a month is a good guideline. Be sure the tires are cold (driven less than 1.6 kilometers) and don’t forget to check your spare tire. You should always use a good-quality tire gauge to check pressure—don’t ever try to “eyeball” tires because they can look fine even when they are underinflated. And remember that tires can lose air pressure in cold weather.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-11">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-11" aria-expanded="true" aria-controls="collapse-11">
                                          There are a lot of places that sell tires. Where should I go to get the right tires for my GMC at the right price?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-11" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-11">
                                    <div className="card-body">
                                       You may not realize it, but most GMC dealerships sell brand-name tires such as Bridgestone, Firestone, Goodyear, Michelin and many more. The Certified Service technicians at your dealership can recommend the tires that are right for your GMC, your driving habits and your budget.
                                    </div>
                                </div>
                                
                                <div className="card-header" role="tab" id="heading-12">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapse-12" aria-expanded="true" aria-controls="collapse-12">
                                           How will I know when I need new tires?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-12" className="collapse" data-parent="#content" role="tabpanel" aria-labelledby="heading-12">
                                    <div className="card-body">
                                        One sure way to know when to replace your tires is when the treadwear indicators—called “wear bars”—appear. These wear bars look like narrow strips of smooth rubber across the tread and appear when it’s time to replace the tires. You should replace the tires if you can see three or more tread wear indicators around the tire. Other ways to know when you need to replace your tires include cord or fabric showing through the rubber, cracks or cuts in the tread or sidewall deep enough to show cord or fabric, bulges or splits in the tire, and punctures or damage that cannot be repaired correctly.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
        </section>    
    )
}

export default Maintanence