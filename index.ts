import { JWTPayload } from "did-jwt";

function parseVerifiableCredential(schema: string, payload: JWTPayload) {
  if (!payload.credentialSubject) throw new Error("Invalid credential");
  const { credentialSubject } = payload;
  switch (schema) {
    case "Email": {
      if (!credentialSubject.emailAddress)
        throw new Error("Invalid Email credential");
      return {
        Email: {
          text: credentialSubject.emailAddress,
          prefix: {
            en: "Email address",
          },
        },
      };
    }
    case "Phone": {
      if (!credentialSubject.phoneNumber)
        throw new Error("Invalid Phone credential");
      return {
        Phone: {
          text: credentialSubject.phoneNumber,
          prefix: {
            en: "Phone number",
          },
        },
      };
    }
    case "DateOfBirth": {
      if (!credentialSubject.dateOfBirth)
        throw new Error("Invalid DateOfBirth credential");
      return {
        DateOfBirth: {
          text: credentialSubject.dateOfBirth,
          prefix: {
            en: "Date of birth",
          },
        },
      };
    }
    case "BHCreditScore": {
      if (!credentialSubject.creditRating || !credentialSubject.creditLimit)
        throw new Error("Invalid BHCreditScore credential");
      return {
        BHCreditScore: {
          CreditRating: {
            text: credentialSubject.creditRating,
            prefix: {
              en: "Credit Rating",
            },
            CreditLimit: {
              text: credentialSubject.creditLimit,
              prefix: {
                en: "Credit Limit",
              },
            },
          },
        },
      };
    }
    case "Dependants": {
      if (!credentialSubject.dependants || !credentialSubject.dependantsDoB)
        throw new Error("Invalid Dependants credential");
      return {
        Dependants: {
          Dependants: {
            text: credentialSubject.dependants,
            prefix: {
              en: "Dependants",
            },
            DependantsDateOfBirth: {
              text: credentialSubject.dependantsDoB,
              prefix: {
                en: "Dependants Date of Birth",
              },
            },
          },
        },
      };
    }
    case "EmploymentStatus": {
      if (!credentialSubject.employmentStatus)
        throw new Error("Invalid EmploymentStatus credential");
      return {
        EmploymentStatus: {
          text: credentialSubject.employmentStatus,
          prefix: {
            en: "Employment status",
          },
        },
      };
    }
    case "HighestEducationAttained": {
      if (!credentialSubject.highestEducationAttained)
        throw new Error("Invalid HighestEducationAttained credential");
      return {
        HighestEducationAttained: {
          text: credentialSubject.highestEducationAttained,
          prefix: {
            en: "Highest education attained",
          },
        },
      };
    }
    case "KYCStatus": {
      if (!credentialSubject.kycStatus)
        throw new Error("Invalid KYC Status credential");
      return {
        KYCStatus: {
          text: credentialSubject.kycStatus,
          prefix: {
            en: "KYC Status",
          },
        },
      };
    }
    case "HasKYC": {
      if (!credentialSubject.hasKYC)
        throw new Error("Invalid passed KYC credential");
      return {
        HasKYC: {
          text: credentialSubject.hasKYC,
          prefix: {
            en: "Has KYC",
          },
        },
      };
    }

    case "RelationshipStatus": {
      if (!credentialSubject.relationshipStatus)
        throw new Error("Invalid RelationshipStatus credential");
      return {
        RelationshipStatus: {
          text: credentialSubject.relationshipStatus,
          prefix: {
            en: "Relationship Status",
          },
        },
      };
    }
    case "Citizenship": {
      if (!credentialSubject.citizenship)
        throw new Error("Invalid citizienship credential");
      return {
        Citizenship: {
          text: credentialSubject.citizenship,
          prefix: {
            en: "Citizenship",
          },
        },
      };
    }
    case "Age": {
      if (!credentialSubject.age) throw new Error("Invalid age credential");
      return {
        Age: {
          text: credentialSubject.age,
          prefix: {
            en: "Age",
          },
        },
      };
    }
    case "AvgMonthlyIncome": {
      if (!credentialSubject.avgMonthlyIncome)
        throw new Error("Invalid Average Monthly Income credential");
      return {
        AvgMonthlyIncome: {
          text: credentialSubject.avgMonthlyIncome,
          prefix: {
            en: "Average Monthly Income",
          },
        },
      };
    }
    case "AvgMonthlyRest": {
      if (!credentialSubject.avgMonthlyRest)
        throw new Error("Invalid Average Monthly Rest credential");
      return {
        AvgMonthlyRest: {
          text: credentialSubject.avgMonthlyRest,
          prefix: {
            en: "Average Monthly Rest",
          },
        },
      };
    }

    case "SavingPercent": {
      if (!credentialSubject.savingPercent)
        throw new Error("Invalid Saving Percent credential");
      return {
        SavingPercent: {
          text: credentialSubject.savingPercent,
          prefix: {
            en: "Saving Percent",
          },
        },
      };
    }
    case "AgriFinCoop": {
      if (!credentialSubject.agriFinCoop)
        throw new Error("Invalid AgriFinCoop credential");
      return {
        AgriFinCoop: {
          text: credentialSubject.agriFinCoop,
          prefix: {
            en: "AgriFin Cooperative",
          },
        },
      };
    }
    
    case "LandSize": {
      if (!credentialSubject.landSize)
          throw new Error("Invalid LandSize credential");
      return {
          LandSize: {
              text: credentialSubject.landSize,
              prefix: {
                  en: "Land Size",
              },
          },
      };
  }

    default:
      throw new Error("Invalid schema");
  }
}

export { parseVerifiableCredential };
