import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function DocPaginatorWrapper(props) {
  const {colorMode} = useColorMode();
  return (
    <>
      <DocPaginator {...props} />
      <br />
      <Giscus
        id="comments"
        repo="casbin/casvisor"
        repoId="R_kgDOKBKvow"
        category="Docs comments"
        categoryId="DIC_kwDOKBKvo84CYuZw"
        mapping="url"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </>
  );
}
