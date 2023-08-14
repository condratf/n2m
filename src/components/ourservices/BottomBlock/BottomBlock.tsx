"use client";
import Image from "next/image";
// local
import { TextWithTitle } from "@/components/shared";
import { OnAppear } from "@/components/animation";
import { Solutions } from "./Solutions";
import { cactusesFirstBlockItems, cactusesLastBlockItems } from "../resources";
import { SERVICES } from "@/app/constants";
// styles
import styles from "./styles.module.scss";

export const BottomBlock = () => {
  return (
    <div className={styles.container}>
      <OnAppear>
        <div
          className={styles.consulting}
          data-param={SERVICES.softwareDev.param}
        >
          <Image
            src={"/assets/graphic/cactus/cactus_1.png"}
            alt="card2"
            width={360}
            height={360}
          />
          <TextWithTitle
            title={SERVICES.softwareDev.title}
            text={SERVICES.softwareDev.text}
            titlePosition="startTitle"
          />
        </div>
      </OnAppear>

      <Solutions />

      <OnAppear>
        <div className={styles.rD} data-param={SERVICES.testingAndQA.param}>
          <TextWithTitle
            title={SERVICES.testingAndQA.title}
            text={SERVICES.testingAndQA.text}
            titlePosition="startTitle"
          />
          <Image
            src={"/assets/graphic/card_1.png"}
            alt="card2"
            width={600}
            height={400}
          />
        </div>
      </OnAppear>

      <div className={styles.cactuses}>
        {cactusesFirstBlockItems.map(({ title, param, text, img }, i) => (
          <OnAppear key={title} delay={i ? 0.3 : 0.1}>
            <section data-param={param}>
              <Image src={img} alt="cactus" width={552} height={200} />
              <TextWithTitle
                title={title}
                text={text}
                titlePosition="startTitle"
              />
            </section>
          </OnAppear>
        ))}
      </div>

      <OnAppear>
        <div
          className={styles.consulting}
          data-param={SERVICES.itConsulting.param}
        >
          <TextWithTitle
            title={SERVICES.itConsulting.title}
            text={SERVICES.itConsulting.text}
            titlePosition="startTitle"
          />
          <Image
            src={"/assets/graphic/cactus/cactus_2.png"}
            alt="card2"
            width={360}
            height={360}
          />
        </div>
      </OnAppear>

      <OnAppear>
        <div className={styles.rD} data-param={SERVICES.rdServices.param}>
          <TextWithTitle
            title={SERVICES.rdServices.title}
            text={SERVICES.rdServices.text}
            titlePosition="startTitle"
          />
          <Image
            src={"/assets/graphic/card_2.png"}
            alt="card2"
            width={600}
            height={400}
          />
        </div>
      </OnAppear>

      <OnAppear>
        <div
          className={styles.consulting}
          data-param={SERVICES.dataAnalytics.param}
        >
          <Image
            src={"/assets/graphic/cactus/cactus_4.png"}
            alt="card2"
            width={360}
            height={360}
          />
          <TextWithTitle
            title={SERVICES.dataAnalytics.title}
            text={SERVICES.dataAnalytics.text}
            titlePosition="startTitle"
          />
        </div>
      </OnAppear>

      <div className={styles.cactuses}>
        {cactusesLastBlockItems["desktop"].map(({ title, text, param, img }, i) => (
          <OnAppear key={title} delay={i ? 0.3 : 0.1}>
            <section data-param={param}>
              <Image src={img} alt="cactus" width={552} height={200} />
              <TextWithTitle
                title={title}
                text={text}
                titlePosition="startTitle"
              />
            </section>
          </OnAppear>
        ))}
      </div>
    </div>
  );
};
