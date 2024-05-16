type pageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function page({ params, searchParams }: pageProps) {
  return (
    <>
      <div className="container">
        Terms and Conditions 1. Introduction By using habitsgarden.com you
        confirm your acceptance of, and agree to be bound by, these terms and
        conditions. 2. Agreement to Terms and Conditions This Agreement takes
        effect on the date on which you first use the habitsgarden.com
        application. 3. License Duration This license is perpetual, with the
        exception of you breaking any part of this license, in which case you
        lose all rights under the license. 4. Product usage By using
        habitsgarden.com, you agree to receive important product updates from
        habitsgarden.com via the email linked with your Google account or the
        email you used to register your account. You can opt-out of this product
        updates anytime by clicking to the {'"Unsubscribe" '}link at the bottom
        of each email. We only send important product updates. 5. Disclaimer It
        is not warranted that habitsgarden.com will meet your requirements or
        that its operation will be uninterrupted or error free. All express and
        implied warranties or conditions not stated in this Agreement (including
        without limitation, loss of profits, loss or corruption of data,
        business interruption or loss of contracts), so far as such exclusion or
        disclaimer is permitted under the applicable law are excluded and
        expressly disclaimed. This Agreement does not affect your statutory
        rights. 6. Warranties and Limitation of Liability habitsgarden.com does
        not give any warranty, guarantee or other term as to the quality,
        fitness for purpose or otherwise of the software.habitsgarden.com shall
        not be liable to you by reason of any representation (unless
        fraudulent), or any implied warranty, condition or other term, or any
        duty at common law, for any loss of profit or any indirect, special or
        consequential loss, damage, costs, expenses or other claims (whether
        caused by habitsgarden.coms negligence or the negligence of its servants
        or agents or otherwise) which arise out of or in connection with the
        provision of any goods or services byhabitsgarden.com. habitsgarden.com
        shall not be liable or deemed to be in breach of contract by reason of
        any delay in performing, or failure to perform, any of its obligations
        if the delay or failure was due to any cause beyond its reasonable
        control. Notwithstanding contrary clauses in this Agreement, in the
        event that habitsgarden.com are deemed liable to you for breach of this
        Agreement, you agree thathabitsgarden.coms liability is limited to the
        amount actually paid by you for your services or software, which amount
        calculated in reliance upon this clause. You hereby release
        habitsgarden.com from any and all obligations, liabilities and claims in
        excess of this limitation. 7. Responsibilities habitsgarden.com is not
        responsible for what the user does with the user-generated content. 8.
        General Terms and Law This Agreement is governed by the laws of France.
        You acknowledge that no joint venture, partnership, employment, or
        agency relationship exists between you and habitsgarden.com as a result
        of your use of these services. You agree not to hold yourself out as a
        representative, agent or employee of habitsgarden.com. You agree that
        habitsgarden.com will not be liable by reason of any representation, act
        or omission to act by you. Last updated: 10 Apr 2022.
      </div>
    </>
  );
}
