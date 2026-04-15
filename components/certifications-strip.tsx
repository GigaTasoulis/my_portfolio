import Marquee from "@/components/marquee"

const certs = [
  { name: "AWS Certified Cloud Practitioner",       issuer: "Udemy"               },
  { name: "Frontend Developer (React)",             issuer: "HackerRank"          },
  { name: "Salesforce Platform Developer I",        issuer: "Salesforce"          },
  { name: "Adobe Experience Manager 6.5",           issuer: "Udemy"               },
  { name: "React (Basic)",                          issuer: "HackerRank"          },
  { name: "Python",                                 issuer: "TestDome"            },
  { name: "Python (Basic)",                         issuer: "HackerRank"          },
  { name: "English C2",                             issuer: "Univ. of Michigan"   },
]

function CertPill({ name, issuer }: { name: string; issuer: string }) {
  return (
    <span className="inline-flex items-center gap-2 mx-4 whitespace-nowrap select-none">
      <span className="w-1 h-1 rounded-full bg-primary/60" aria-hidden />
      <span className="text-xs text-muted-foreground">
        <span className="text-foreground/70 font-medium">{name}</span>
        {" "}·{" "}
        <span>{issuer}</span>
      </span>
    </span>
  )
}

export default function CertificationsStrip() {
  return (
    <div className="py-6 border-y border-border overflow-hidden">
      <Marquee duration={40}>
        {certs.map((c) => (
          <CertPill key={c.name} {...c} />
        ))}
      </Marquee>
    </div>
  )
}
