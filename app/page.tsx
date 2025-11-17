import Image from "next/image";
import Link from "next/link";

const vibemacsAscii = String.raw`
                                                                                          
                                                                                          
                                   ,;                                        .,          .
             t   .               f#i                                        ,Wt         ;W
             Ej  Ef.           .E#t            ..       :           ..     i#D.        f#E
  t      .DD.E#, E#Wi         i#W,            ,W,     .Et          ;W,    f#f        .E#f 
  EK:   ,WK. E#t E#K#D:      L#D.            t##,    ,W#t         j##,  .D#i        iWW;  
  E#t  i#D   E#t E#t,E#f.  :K#Wfff;         L###,   j###t        G###, :KW,        L##Lffi
  E#t j#f    E#t E#WEE##Wt i##WLLLLt      .E#j##,  G#fE#t      :E####, t#f        tLLG##L 
  E#tL#i     E#t E##Ei;;;;. .E#L         ;WW; ##,:K#i E#t     ;W#DG##,  ;#G         ,W#i  
  E#WW,      E#t E#DWWt       f#E:      j#E.  ##f#W,  E#t    j###DW##,   :KE.      j#E.   
  E#K:       E#t E#t f#K;      ,WW;   .D#L    ###K:   E#t   G##i,,G##,    .DW:   .D#j     
  ED.        E#t E#Dfff##E,     .D#; :K#t     ##D.    E#t :K#K:   L##,      L#, ,WK,      
  t          E#t jLLLLLLLLL;      tt ...      #G      .. ;##D.    L##,       jt EG.       
             ,;.                              j          ,,,      .,,           ,         
                                                                                          
`;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-8 px-3 py-8 text-center sm:px-8 sm:py-16">
        <pre className="mx-auto inline-block max-w-full overflow-hidden px-2 font-mono whitespace-pre text-[clamp(0.18rem,0.9vw,0.95rem)] leading-[1.1] text-zinc-900 dark:text-zinc-50">
          {vibemacsAscii}
        </pre>

        <p className="max-w-2xl text-balance text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          Emacs config for running multiple Codex, Claude Code and Gemini agents
        </p>

        <div className="w-full max-w-4xl">
          <Image
            src="/product.png"
            alt="Vibemacs product screenshot"
            width={2222}
            height={1192}
            priority
            className="h-auto w-full rounded-3xl border border-zinc-200 bg-zinc-100 p-3 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
          />
        </div>

        <Link
          href="https://github.com/andyrewlee/vibemacs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-zinc-900 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-4 w-4 fill-current"
          >
            <path d="M8 0a8 8 0 0 0-2.53 15.6c.4.07.55-.17.55-.38l-.01-1.49c-2 .37-2.53-.5-2.69-.96-.09-.22-.48-.96-.82-1.15-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0 0 8 0" />
          </svg>
          GitHub
        </Link>
      </main>
    </div>
  );
}
