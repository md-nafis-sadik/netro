import { fetchWithDelay } from "@/lib/apiHandler";
import { images, timestampDisplay } from "@/services";
import Image from "next/image";
import React from "react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import PageThumbnail from "../shared/PageThumbnail";
import JournalDetailsShareSocials from "./JournalDetailsShareSocials";

type Data = {
  featuredImage: string | StaticImport;
  content: any;
  title: string;
  publishedAt: number;
};

type Journal = {
  data: Data;
};

const JournalDetailsWrapper = async ({ id }: { id: string }) => {
  const journal = (await fetchWithDelay(
    `/blogs/find-by-title/${id}`
  )) as Journal;
  const journalData = journal?.data;

  return (
    <section className="">
      <PageThumbnail
        title={journalData?.title}
        description={timestampDisplay(journalData?.publishedAt)}
        titleClassName="text-[#1D1D1D] text-[48px] md:text-[64px] lg:text-[96px]"
      />

      <div className="relative h-[300px] md:h-[420px] lg:h-[600px] w-full overflow-hidden">
        <Image
          src={journalData?.featuredImage || images.blog1}
          alt={journalData?.title || "Blog image 1"}
          className="absolute_center min-h-full min-w-full"
          loading="lazy"
          height={1280}
          width={1920}
        />
      </div>

      <div className="max-w-[952px] mx-auto">
        <div
          className="content font-inter"
          dangerouslySetInnerHTML={{ __html: journalData?.content || "" }}
        />

        <JournalDetailsShareSocials journal={journalData} />
      </div>
    </section>
  );
};

export default JournalDetailsWrapper;
