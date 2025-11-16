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
      <main className="flex min-h-screen w-full max-w-5xl items-center justify-center px-3 py-8 sm:px-8 sm:py-16">
        <pre className="mx-auto inline-block max-w-full overflow-hidden px-2 font-mono whitespace-pre text-center text-[clamp(0.18rem,0.9vw,0.95rem)] leading-[1.1] text-zinc-900 dark:text-zinc-50">
          {vibemacsAscii}
        </pre>
      </main>
    </div>
  );
}
