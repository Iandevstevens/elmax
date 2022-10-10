import React from "react";

const Pics = () => {
  const test = () => {
    console.log("here");
  };
  return (
    <div>
      {/* <ins className="dcmads" style={{ display: "inline-block", width: "1080px", height: "1080px" }} data-dcm-placement="N1416604.4009173XAXISZA/B28458157.345596800" data-dcm-rendering-mode="script" data-dcm-https-only data-dcm-gdpr-applies="gdpr=${GDPR}" data-dcm-gdpr-consent="gdpr_consent=${GDPR_CONSENT_755}" data-dcm-addtl-consent="addtl_consent=${ADDTL_CONSENT}" data-dcm-ltd="false" data-dcm-resettable-device-id="" data-dcm-app-id="">
        <script src="https://www.googletagservices.com/dcm/dcmads.js"></script>
      </ins>
       */}
      {/* <ins className="dcmads" style={{ display: "inline-block", width: "300px", height: "250px" }} data-dcm-placement="N1416604.4009173XAXISZA/B28458157.345596107" data-dcm-rendering-mode="iframe" data-dcm-https-only data-dcm-gdpr-applies="gdpr=${GDPR}" data-dcm-gdpr-consent="gdpr_consent=${GDPR_CONSENT_755}" data-dcm-addtl-consent="addtl_consent=${ADDTL_CONSENT}" data-dcm-ltd="false" data-dcm-resettable-device-id="" data-dcm-app-id="">
        <script src="https://www.googletagservices.com/dcm/dcmads.js"></script>
      </ins> */}
      <div onClick={test} style={{ zIndex: 1000, backgroundColor: "black", height: 10, width: 10 }}></div>
      <iframe style={{ zIndex: 1 }} src="https://ad.doubleclick.net/ddm/adi/N1416604.4009173XAXISZA/B28458157.345596107;sz=300x250;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}?" width={300} height={250}>
        <script language="JavaScript1.1" src="https://ad.doubleclick.net/ddm/adj/N1416604.4009173XAXISZA/B28458157.345596107;abr=!ie;sz=300x250;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}?"></script>
      </iframe>
    </div>
  );
};

export default Pics;
