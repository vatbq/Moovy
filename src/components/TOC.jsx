import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '55px',
    color: '#e2e2e2',
  },
  ul: {
    listStyle: 'none'
  }
}));

const TOC = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();

  const renderWithAuthenticatedUser = () => {
    return (
      <div className={classes.root}>
        <h2>Terms And Conditions</h2>
        <p>
          The following terms and conditions govern the sale by NavStore (Great Lakes Marine Specialties) -
          SELLER to the BUYER on orders for marine products, computer systems and/or related products.
          These terms and conditions change occasionally.
          Please read carefully before submitting your order. By ordering from NavStore (Great Lakes Marine Specialties), you agree to the following terms.
          If you do not agree with these terms, please exit our site. Please print this page and retain for your records so that you have a copy of the TOC at the time of your purchase.
          <ul className={classes.ul}>
            <li>
              <h5>ORDER</h5>
              <p>The BUYER hereby orders from NavStore (GREAT LAKES MARINE SPECIALTIES), hereinafter referred to as SELLER, the product(s) listed on the front of this document.</p>
            </li>

            <li>
              <h5> PURCHASE PRICE</h5>
              <p>The BUYER agrees to pay the balance of the total purchase price as specified on the sales receipt document at checkout. In addition, BUYER agrees to pay any sales or other taxes levied on or measured by such purchase price, or arising from the use of the product(s) and any parts or maintenance supplied, including without limitation, any additional sales, use, gross receipts, privilege, excise and personal property taxes unless specified.</p>
            </li>

            <li>
              <h5>TITLE AND DELIVERY</h5>
              <p>Delivery of goods to a carrier by SELLER will be FCA Free Carrier, Minneapolis, Minnesota or from the manufacture's or distributor's shipping point. BUYER assumes the risk of loss, damage or shortage in transit and shall be responsible for pursuing all claims with the carrier or carrier’s insurer. BUYER shall provide SELLER with written notice of any shortage, loss or damage within three (3) days of receipt of the goods. SELLER shall have no liability to customers or any third party for any loss, damage, or expense from any delay or failure of performance due to any cause beyond the control of SELLER including but not limited to fire, strike, accident, war conditions, government regulation or restriction, shortages in transportation, power, labor, or material, freight embargo, riot or civil commotion, pandemic conditions, default of the supplier, or events which render performance difficult or impossible. Shipments that are non-deliverable due to incorrect and/or incomplete shipping address supplied by you, the customer, will result in an additional shipping charge of $20.00 for address change to attempt re-delivery. We are not responsible or liable for replacement of your order if you give us an incorrect or incomplete shipping address. We ship Monday-Friday only. We are closed on Saturday and Sunday. If you need your item by a specific date, please contact us before ordering to insure that we will be able to meet your request.
              Docks are not returnable. Dock shipments need to be inspected at the time of receipt.  If there is damage due to shipping the dock should be refused and it will be the trucking companies responsibility to return the dock to the manufacturer. We will work with you and the dock Manufacturer to correct any part shortages on shipped docks when received. Dock part shortages need to be reported to us with in 3 business days of receipt of the dock.</p>
            </li>

            <li>
              <h5>INSPECTION</h5>
              <p>BUYER shall inspect the product(s) at delivery and shall notify SELLER of any defects or discrepancies in the product(s). Unless BUYER notified SELLER in writing immediately of any defects or discrepancies, it shall be conclusively presumed, by BUYER and SELLER, that the product(s) was delivered in good repair and operable and BUYER accepts the product(s) as delivered. All software sales are final (including electronic navigation charts.)</p>
            </li>

            <li>
              <h5>GARRANTIES</h5>
              <p>On all computer products the manufacturer's/supplier's warranty is expressly given to BUYER upon delivery of said products. On software products, the manufacturer's/supplier's warranty is expressly given to the BUYER upon delivery of each separate program. No other warranties, expressed or implied, shall be deemed to have been made by the SELLER. Any implied warranties of merchantability and fitness for a particular purpose which exceed the manufacturer's/supplier's warranties, are hereby disclaimed by the SELLER and excluded from this Agreement.</p>
            </li>

            <li>
              <h5> ALTERATION, MODIFICATIONS AND ATTACHMENTS</h5>
              <p>Any alterations, additions, improvements, or attachments on the product(s) not authorized in writing by SELLER shall be solely at BUYER's expense and risk. To the extent that any alteration. Addition, improvements, modification, or installation affects the operation of the product(s), every warranty under this Agreement including without limitation, the implied warranty of merchantability, shall be deemed waived by the BUYER and null and void and SELLER shall have no further obligations to the BUYER hereinafter.</p>
            </li>

            <li>
              <h5>SOFTWARE LICENSE</h5>
              <p>BUYER expressly agrees to sign all manufacturer's/ supplier's software licensing documents at the time of delivery.</p>
            </li>

            <li>
              <h5> LIABILITY</h5>
              <p>SELLER's liability under this Agreement for any breach hereof is limited to those rights conferred on BUYER under the warranties and it is hereby agreed that those remedies are BUYER's exclusive and sole remedy; and any right of BUYER to consequential, incidental, indirect or special damages, is hereby excluded. BUYER's remedy in case of non-delivery by SELLER shall be limited to refund of the amount of the purchase price paid and received by SELLER as down payment. SELLER shall not be liable for any loss, damages, or injury, either personal or business, of any kind to any premises or property arising from the use of the product(s).</p>
            </li>

            <li>
              <h5> RETURN POLICY AND CANCELLATION POLICY</h5>

              <p>Products purchased from the SELLER may be returned by the BUYER, in their unopened package, during the 30 day (Computers, Laptops & LCD Displays, other electronic devices - 10 days, Custom Configured Computers or Displays are not returnable) period following date of shipment, to the BUYER, for a refund of the purchase price. The shipping and handling charges are not refundable. In order to receive a refund, an RMA (return merchandise authorization) number must be obtained from the SELLER. All merchandise returned must included all the manuals, software and hardware; must be returned in their original boxes; shipment prepaid (no COD’s accepted) and insured to the SELLER. The returned merchandise must be in like new (mint) condition. Any Blister packed items or products that come in hard plastic wrap can only be returned if unopened and in original condition. Unauthorized and/or incomplete returns or returns of opened packages are subject to restocking fee of 15% to 25% depending on the condition of the returned merchandise. Damaged items are not returnable. SELLER reserves the right to refuse for return, damaged, used or incomplete returns. There shall be no refund for opened software packages purchased from the SELLER. DOA (Dead-on-arrival) electronics shipped outside of the USA will have to be returned at the expense of the BUYER. The SELLER, does not pay for the return of DOA products shipped internationally. DOA products will be returned to the MANUFACTURER if that is their policy. If not, the DOA item will be returned to the SELLER.
              We reserve the right to refuse any return and to require that certain items be returned directly to the manufacturer.</p>
            </li>

            <li>
              <h5>TYPOGRAPHICAL ERRORS</h5>
              <p>In the event a SELLER product or service is listed at an incorrect price due to typographical error or error in pricing information received from our suppliers, SELLER shall have the right to refuse or cancel any orders placed for product or service listed at the incorrect price. SELLER shall have the right to refuse or cancel any such orders whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is canceled, SELLER shall issue a credit to your credit card account in the amount of the incorrect price.</p>
            </li>

            <li>
              <h5>GOVERNING LAW</h5>
              <p>
                THE SALE(S) SHALL BE GOVERNED BY AND CONSTRUED UNDER THE LAWS OF THE STATE OF MINNESOTA. Venue and jurisdiction for all disputes shall lie in Hennepin County, State of Minnesota, being the place where BUYER’S order has been received and/or entered.
              </p>
            </li>

            <li>
              <h5>RENTIRE AGREEMENT</h5>
              <p>This document constitutes the entire Agreement between the BUYER and SELLER. It is intended as a complete and exclusive statement of the terms of the Agreement and no course of prior dealings between the parties and no usage of the trade shall be relevant to supplemental or explain any term used in this Agreement. No agent, employee, or representative of the SELLER has any authority to bind the SELLER to any affirmation, representation or warranty concerning the product(s) sold under this Agreement, unless the same is included within this written Agreement. This Agreement may be modified or rescinded only by a written instrument signed by the parties hereto or by their duly authorized agents. Waiver by the SELLER of any provision hereof in one instance shall not constitute a waiver as to any other instance.</p>
            </li>
          </ul>
        </p>
      </div>
    )
  }

  const renderWithoutAuthenticatedUser = () => {
    return (
      <div className={classes.root}>
        <h2>Terms And Conditions</h2>
        <p>
          Please read these Terms carefully. Access to, and use of Usabilla products (“Products”), Usabilla services (“Services”), and the Usabilla website https://app.usabilla.com/ (“Website”),
          including any of its content, is conditional on your agreement to these Terms.
          You must read, agree with, and accept all of the terms and conditions contained in these Terms.
          By creating an account, or by using or visiting our Website, you are bound to these Terms and you indicate your continued acceptance of these Terms.
          <ul className={classes.ul}>
            <li>
              <h5>Your Usabilla Account</h5>
              <p>If you create an account on the Website, you are responsible for maintaining the security of your account, and you are fully responsible for all activities that occur under the account and any other actions taken in connection with the account. You agree to provide and maintain accurate, current and complete information, including your contact information for notices and other communications from us and your payment information. You may not use false or misleading information in connection to your account, or trade on the name or reputation of others, and Usabilla may change or remove any information that it considers inappropriate or unlawful, or otherwise likely to expose Usabilla to claims of third parties. You agree that we may take steps to verify the accuracy of information you have provided to us.</p>
            </li>

            <li>
              <h5>Responsibility of Users of the Website, Products, and/or Services</h5>
              <p>Your access to, and all of your use of the Website, Products, and/or Services must be lawful and must be in compliance with these Terms, and any other agreement between you and Usabilla.
                When accessing or using the Website, Products, and/or Services, you must behave in a civil and respectful manner at all times. We specifically prohibit any use of the Website, Products, and/or Services, and you agree not to use the Website</p>
            </li>

            <li>
              <h5>Fees and Payments</h5>
              <p>By purchasing Products and/or Services, you agree to pay Usabilla annual subscription fees indicated for such Product or Service. Payments will be due as of the first day you sign up for a Product and/or Services, and will cover an annual period, as indicated when signing up.
              Configurations and prices of the Website, Products, and/or Services are subject to change at any time, and Usabilla shall at all times be entitled to modify configurations, fees, prices and quotations, provided that no price changes shall be made applicable to you during a subscription term, and shall only take effect after Usabilla and you have agreed upon an extension, upgrade or renewal of the subscription term. You agree to any such changes if you do not object in writing to Usabilla within seven (7) business days of receiving a notice of Usabilla, or an invoice, incorporating or announcing the fee and/or price changes. All prices are exclusive of, and you shall pay all taxes, duties, levies or fees, or other similar charges imposed on Usabilla or yourself by any taxing authority (other than taxes imposed on Usabilla’s income), related to your order, unless you have provided Usabilla with an appropriate resale or exemption certificate for the delivery location, which is the location where the Products and/or Services are used or performed. In case of changes in law such that a tax is levied that is or becomes irrecoverable with a consequent increase to the costs to Usabilla of delivering the Products and/or Services, whereby and to such an extent Usabilla is entitled to increase its prices accordingly and retroactively.
              </p>
            </li>

            <li>
              <h5>Use of Third Party Content and Materials</h5>
              <p>Usabilla has not reviewed, and cannot review, all of the material, including computer software, posted to the Website, and cannot therefore be responsible for that material’s content, use or effects. By operating the Website, Usabilla does not represent or imply that it endorses the material there posted, or that it believes such material to be accurate, useful or non-harmful. The Website may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. The Website may also contain material that violates the privacy or publicity rights, or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. Usabilla disclaims any responsibility for any harm and/or damages resulting from the use or downloading of postings of other parties on the website.</p>
            </li>

            <li>
              <h5>Content Posted on Other Websites</h5>
              <p>We have not reviewed, and cannot review, all of the material, including computer software, made available through the websites and webpages to which Usabilla.com links, and that link to Usabilla.com. Usabilla does not have any control over those non-Usabilla websites and webpages, and is not responsible for their contents or their use. By linking to a non-Usabilla website or webpage, Usabilla does not represent or imply that it endorses such website or webpage.</p>
            </li>

            <li>
              <h5>Copyright Infringement</h5>
              <p>As Usabilla requires others to respect its intellectual property rights, it respects the intellectual property rights of others. If you believe that material located on or linked to by the Website violates your copyright, you are encouraged to notify Usabilla. Usabilla will, as it is able, respond to all such notices, including as required or appropriate by removing the infringing material or disabling all links to the infringing material. In order to bring infringing material to our attention, you must provide our DMCA Agent with the following information: (a) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyrighted work; (b) an identification of the copyrighted work and the location on the Website of the allegedly infringing work; (c) a written statement that you have a good faith belief that the disputed use is not authorized by the owner, its agent or the law; (d) your name and contact information, including telephone number and email address; and (e) a statement by you that the above information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or authorized to act on the copyright owner’s behalf.</p>
            </li>
          </ul>
        </p>
      </div>
    )
  }

  return isAuthenticated ? renderWithAuthenticatedUser() : renderWithoutAuthenticatedUser();
}

export default TOC;