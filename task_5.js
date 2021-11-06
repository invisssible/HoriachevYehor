  const s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
  return s.toUpperCase().split(';')
             .map(name=> `(${name.split(':')[1]}, ${name.split(':')[0]}`)
             .sort()
             .join('');