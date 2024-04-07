import React from 'react'
import { urls } from '../../config/constants';
import MoveCursorToTop from '../../services/MoveCursorToTop'

const Aboutus = () => {
  MoveCursorToTop();
    return (
      <>
        <section className="hero__banner_inner--block" style={{backgroundImage: "url('./images/about-hero-banner.jpg')"}}>
          <div className="container">
              <div className="page__title">
                  <h2 className="h6 text-white mb-0">About US</h2>
              </div>
          </div>
        </section>
        <section className="about_us--block py-5 bg-white">
          <div className="container">
            <div className="row align-content-center">
              <div className="col-md-8">
                <p>The late Sheikh Moosa AbdulRahman Hassan was a well known Omani businessman, tribal leader, landlord, and a Gulf icon; he was born in an old town Muscat in1902 and finished his studies in the American Mission School. He established a firm in 1927 in supplying coals and foodstuffs to British ships & frigates in Muscat.</p>
                  <h4>Postal Services</h4>
                  <p>Sheikh Moosa was one of the pioneer users and establishers of the Post Office Box in the Sultanate of Oman. Omanis abroad (especially East Africa, other Gulf States, and India) used to send him mails to his personal mailbox and he used to deliver them to people, later on, hence it was like a public address for anyone to use. The company still maintains the same P.O. Box 4 Muscat.</p>
              </div>
              <div className="col-md-4">
                <img src={`${urls.frontendUrl}/images/about-postal-services.jpg`} alt="About Image" />
              </div>
            </div>
            <div className="row align-content-center">
                <div className="col-md-4">
                    <img src={`${urls.frontendUrl}/images/about-ceo.jpg`} alt="About Image" />
                </div>
                <div className="col-md-8">
                    <h4>Our Company</h4>
                    <p>Moosa is one of the oldest business groups in Oman having been formed in 1927. Steeped in Automotive, Moosa was, in the 1950’s the agent for Holden, from the 60’s the distributor for BEDFORD, from the 70’s the GMC distributor in Oman and more recently from the 80’s, 90’s and 2000 the distributor for Opel & Suzuki amongst others.</p>
                    <p>In addition, Moosa has an investment in business and properties both in Oman & abroad.</p>
                    <br />
                    <h4>Our Vision</h4>
                    <p>To become the national benchmark for automotive sales and services by virtue of our impeccable standards for customer care, business integrity and service delivery</p>
                    <br />
                    <h4>CEO's Message</h4>
                    <p>It is a privilege and honor to serve at the helm of Moosa Group, one of Oman’s most reputable business houses. Since its early years itself, the company has strongly aligned its growth strategy with the nation’s long-term aspirations for economic diversification and sustainable development.</p>
                    <p>Specific to the automotive industry, the Group has played a pioneering role in the introduction and popularization of motor cars in Oman, some of the classics in their time, others enduring icons of the modern motoring era. Over its roughly 70-year-old history, Moosa Group’s legacy as an automotive distributor is synonymous with the heritage of motoring in pre-renaissance Oman. Currently, it is the sole distributor for prestigious brands such as GMC and Suzuki, among other auto-related products and services.</p>
                </div>
                <div className="col-md-12">
                    <p>Nurturing this proud legacy are members of the Moosa family who, through a combination of keen market insight and perceptive leadership, continue to position the Group for strong and sustained corporate growth. Success for this new generation of business leaders is determined not by sales alone, but by the strength and durability of the relationships it has built with its growing family of customers. Moosa Group has always taken pride in nurturing lifelong relationships with its customers through the delivery of products and services that are unquestionable of good value.</p>
                    <p>In addition to representing an industry-leading portfolio of automotive brands, Moosa Group is also proud of its consistently superior service standards. This is also reflected in the professional capabilities of its shop floor personnel, the fully-equipped maintenance and repair workshops, and the high quality of its auto parts and accessories.</p>
                    <p>As CEO, I am committed to harnessing the diverse strengths and capabilities of our organization to take our product and service delivery to a new level. Customers can look forward to a positive, seamless, and hassle-free experience when they visit our showrooms, with digital technology set to make an important contribution to this end. We aspire to be the benchmark for customer satisfaction and service delivery as we strive to enhance the overall car ownership and motoring experience for our clientele. This, in essence, represents Moosa Group’s philosophy for business success.</p>
                    <br /><br />
                    <h4>Banking & Finance</h4>
                    <p>Sheikh Moosa also established a money transfer service between the 40s and 60s of the 20th century through his well established & recognized P.O. Box 4 Muscat, which functionally operated as first money transferring & wiring service hub for many Omanis who were living & working in East Africa, Gulf States, and India. This complimentary service was introduced to aid Omanis, who were living abroad back then, to send and receive money, as it proved difficult due to the lack of professional & commercial banking services at that time. It’s worth mentioning, this free of charge financial service was provided well before Western Union was established in the region.</p>
                    <p>Furthermore, he was a founding member & one of the directors of The British Bank of The Middle East, which was established in 1948. The bank is one of the oldest banks not only in Oman but also in the entire region. Later on in the mid-1970s, he was involved in establishing Bank of Oman, Bahrain and Kuwait, which was a joined venture with Bank of Bahrain & Kuwait (BBK).</p>
                </div>
            </div>
            <div className="row align-content-center">
                <div className="col-md-9">
                    <h4>Business & Trade</h4>
                    <p>Well through the early to mid part of the 20th century, the city of Muscat was recognized as the centre of trade between the Arabian Peninsula, Indian Coast, East Africa and other parts of Oman. Sheikh Moosa traded a variety of goods including dates, dried fish and timber. Furthermore, he housed the travelling traders in his residence, which later on was converted to a hall that is used to host various social occasions.</p>
                    <p>Due to his involvement of trading in kerosene, which was the main source of energy at that time, Sheikh Moosa was chosen by The British Petroleum Company (BP) to become their representative in Oman. He owned a network of BP filling stations in Muscat and Batinah’s coast.</p>
                    <p>He also got into a partnership with the British Gary McKenzie, and Oman’s W.J.Towell & Co; which formed Gary McKenzie Moosa Towell Group Of Companies, which later became Oman United Agencies. The company catered to supplies and logistics for oil companies in Oman, which also had a foodstuff division and a travel agency. Sheikh Moosa originally formed the company in 1956 before it partnered up with other partners.</p>
                </div>
                <div className="col-md-3">
                    <img src={`${urls.frontendUrl}/images/about-business.jpg`} alt="About Banner" />
                </div>
            </div>
            <div className="row align-content-center">
                <div className="col-md-4">
                    <img src={`${urls.frontendUrl}/images/about-agriculture.jpg`} alt="About Banner" />
                </div>
                <div className="col-md-8">
                    <p>Moosa Furniture, which was the furnishing arm of the establishment, has successfully done furnishing projects for many ministries and government-owned organizations especially in the 1970s.</p>
                    <p>Sheikh Moosa also represented brands such as Canon cameras, Eterna Matic Swiss watches in the Omani market throughout the 1970’s, until these agencies were sold to other merchants in the early 1980’s.</p>
                    <br />
                    <h4>Agriculture/Irrigation</h4>
                    <p>Sheikh Moosa has ventured with a leading firm from the UK in order to construct a project for water supply in Muscat and Mattrah. He also represented various UK companies that were involved in water pumps and diesel generators, which helped to boost the agricultural sector in Oman very fast. They were supplied and disturbed too many regions of Oman and The United Arab Emirates.</p>
                    <p>AlKhaleej Daily Newspaper, on its 17th of February 2012 issue, stated his contributions with late Sheikh Zayyed (former President of the United Arab Emirates), in the agricultural sector of the United Arab Emirates, specifically in Al Dhaqdaqah irrigation project in Ras al Khaimah.</p>
                </div>
            </div>
            <div className="row align-content-center">
                <div className="col-md-8">
                    <h4>Electricity</h4>
                    <p>As stated earlier, Sheikh Moosa was the supplier of kerosene, which was the primary source of energy back then, as well as the disturber of diesel generators. Both of them were needed in order to supply the country’s demand for energy and electricity. He also formed the first electricity company in Mattrah-Oman, with two other partners, in order to cater to the increasing demand for energy in the country.</p>
                    <br />
                    <h4>Automotive</h4>
                    <p>Sheikh Moosa was an automotive dealer since the 1950’s, being successful in acquiring the agency for Holden, which makes him one of the oldest automotive dealers not only in Oman but in the entire region as well. He also became the agent for Bedford Trucks, which was supplied to the Omani Army. In the 1960’s, the automotive division acquired additional agencies and represented Vauxhall and India Super Tires. In the 1970’s & 1980’s, he became the distributor for Pontiac, GMC, Opel, Suzuki, Foton, Mantra, and many other leading global automotive brands. The defense and military division of the company also kept growing by supplying specially built vehicles for the Omani Armed Forces.</p>
                </div>
                <div className="col-md-4">
                    <img src={`${urls.frontendUrl}/images/about-electricity.jpg`} alt="About Banner" />
                </div>
            </div>
            <div className="row align-content-center">
                <div className="col-md-4">
                    <img src={`${urls.frontendUrl}/images/about-construction.jpg`} alt="About Banner" />
                </div>
                <div className="col-md-8">
                    <h4>Construction & Real Estate Development</h4>
                    <p>Moosa AbdulRahman Establishment was also involved in the construction sector when it partnered with the British Contracting firm, Costain, which was involved in building the Postal Office Building in Muscat, the expansions in Bait Al-Falaj in Ruwi area of Muscat, as well as defense camps in Bait Al-Falaj and Bidbid. He also partnered with Oman’s leading businessmen late Qais Al-Zawawi, Suhail Bahwan, and Mohsin Haider Darwish to establish Qurum Contracting Company, one of the largest local contracting companies back then.</p>
                    <p>The company was one of the pioneer investors in the Madinat Al-Sultan Qaboos Project. Today the company owns and develops many commercial and residential real estate projects in Oman, UAE, Lebanon, United Kingdom, and Canada among others.
                    </p>
                </div>
            </div>
            <div className="row align-content-center">
                <div className="col-md-8">
                    <h4>Banking & Finance</h4>
                    <p>Sheikh Moosa AbdulRahman, played an instrumental role in establishing the first municipal council in Oman in the 1950’s. His Majesty Sultan Qaboos bin Said Al-Said, Sultan of Oman, issued a Royal Decree in the 21st of May 1972 to establish a committee to resolve commercial disputes, which consisted of the late Sheikh Moosa, late Qais Al-Zawawi, Mohammed Al-Zubair, Mohsin Haider Darwish, late Ali Dawood Al-Raisi, late Hajj Jafar Abdul Rahim and late Hajj Ali Sultan.</p>
                    <p>In addition, Oman’s Currency Board was established in 1972 by a Royal Decree; Sheikh Moosa was the Vice Chairman and the Secretary of Finance of the board. Furthermore & also in the 1970’s, he was assigned in the committee to form Oman’s Chamber of Commerce and Industry. </p>
                </div>
                <div className="col-md-4">
                    <img src={`${urls.frontendUrl}/images/about-banking.jpg`} alt="About Banner" />
                </div>
            </div>
            <div className="row align-content-center">
                <div className="col-md-4 text-center">
                    <img src={`${urls.frontendUrl}/images/about-finance.jpg`} alt="About Banner" />
                </div>
                <div className="col-md-8">
                    <p>His Majesty Sultan Qaboos bin Said Al-Said, Sultan of Oman, granted late Sheikh Moosa AbdulRahman in 1983 Oman’s Civil Medal for his social, economical & political contributions to Oman & Omani civil societies</p>
                    <p>Sheikh Moosa died and was buried in old town Muscat on 21st of April 1987, leaving a long legacy of accomplishments and services to his country & community; he was survived by two sons (Abdullah & Ali), who were the family’s patriarchs, looking after family’s business, social & governmental interests. They have since both passed away and this visionary legacy lives on today sustained by a new generation of the industrious Moosa family.</p>
                </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Aboutus