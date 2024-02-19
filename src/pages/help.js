import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

function Help() {
  return (
    <Layout title="Help" description="Help Page" styles={{padding: "19px"}}>
      <div className="container text--center">
        <br /><br />
        <h1><Translate>Need help?</Translate></h1>
        <Translate>If you need help with Casvisor, you can try one of the mechanisms below.</Translate>
        <br /><br /><br /><br />
        <div className="row">
          <div className="col">
            <h2><Translate>Forum</Translate></h2>
            <Translate>Discuss with maintainers or share your experience about Casvisor on</Translate> <a href="https://forum.casbin.com"><Translate>Casvisor Forum</Translate></a>.
          </div>
          <div className="col">
            <h2><Translate>Discord</Translate></h2>
            <Translate>You can join the conversation on</Translate> <a href="https://discord.gg/yfKcuHVAHB"><Translate>Discord</Translate></a> <Translate>for contributing help.</Translate>
          </div>
          <div className="col">
            <h2><Translate>Tencent QQ and Wechat</Translate></h2>
            <Translate
              values={{
                767939681: (
                  <a href="https://qm.qq.com/cgi-bin/qm/qr?k=TgDE42f-w4V3_Scq-2eX-f3bVEspS_tX&jump_from=webapi&authKey=ZLfUKo0GfAMoKWieUx6oJR37M8Z5HQ1aSy7nGSniims26hA8AoP75tNbnZJXPsBy" target="_blank" rel="noreferrer">
                    767939681
                  </a>
                ),
                Wechat_group: (
                  <a href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg" target="_blank" rel="noreferrer">
                    Wechat group
                  </a>
                ),
              }}
            >
              {"You can contact us by joining the QQ group: {767939681} or {Wechat_group}"}
            </Translate>
          </div>
          <div className="col">
            <h2>Github</h2>
            <Translate>At our</Translate> <a href="https://github.com/casbin/casvisor"><Translate>GitHub repo</Translate></a><Translate>, browse and submit</Translate> <a href="https://github.com/casbin/casvisor/issues">issues</a> or <a href="https://github.com/casbin/casvisor/pulls">pull requests</a> <Translate>for bugs you find or any new features you may want implemented.</Translate>
          </div>
        </div>
      </div>
      <br /><br />
    </Layout>
  );
}

export default Help;
