import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const PersonalProgressBarstep = ({width}) => {
  const router = useRouter();
  return (
    <section>
      <div className="progressbar-bx">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="list-unstyled">
                <li
                  onClick={() => router.push("/smartphone")}
                  className={router.pathname === "/smartphone" ? "active" : ""}
                >
                  Stap 1: Vul de gegevens in{" "}
                  <i className="fas fa-chevron-right" />
                </li>
                <li
                  className={router.pathname === "/smartphone/compare"  ? "active" : ""}
                  onClick={() => router.push("/smartphone/compare")}
                >
                  Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                </li>
                <li
                  onClick={() => router.push("/smartphone/user-details")}
                  className={router.pathname === "/smartphone/user-details" ? "active" : ""}
                >
                  Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                </li>
                <li
                  onClick={() => router.push("/smartphone/submit")}
                  className={router.pathname === "/smartphone/submit" ? "active" : ""}
                >
                  Stap 4: Voltooid <i className="fas fa-flag" />
                </li>
              </ul>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: width }}
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            >
               <p className='mb-0'> Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24}/></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProgressBarstep;