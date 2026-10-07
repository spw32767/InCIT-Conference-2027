// Keep the owner's approved Submission wave; other routes get stable seeded variants.
const approvedPaths = [
  "M 0,500 L 0,125 C 41.616347569955806,120.49355670103093 83.23269513991161,115.98711340206185 154,129 C 224.7673048600884,142.01288659793815 324.68556701030934,172.5451030927835 391,159 C 457.31443298969066,145.4548969072165 490.02503681885116,87.83247422680412 538,82 C 585.9749631811488,76.16752577319588 649.2142857142857,122.12500000000001 709,123 C 768.7857142857143,123.87499999999999 825.1178203240061,79.66752577319586 888,87 C 950.8821796759939,94.33247422680414 1020.3144329896907,153.2048969072165 1088,154 C 1155.6855670103093,154.7951030927835 1221.6244477172313,97.51288659793813 1280,83 C 1338.3755522827687,68.48711340206187 1389.1877761413843,96.74355670103094 1440,125 L 1440,500 L 0,500 Z",
  "M 0,500 L 0,291 C 74.26969808541975,277.94826951399114 148.5393961708395,264.8965390279823 206,266 C 263.4606038291605,267.1034609720177 304.1121134020619,282.3621134020619 352,307 C 399.8878865979381,331.6378865979381 455.0121502209131,365.65500736377027 510,350 C 564.9878497790869,334.34499263622973 619.8392857142857,269.01785714285717 687,244 C 754.1607142857143,218.98214285714283 833.6307069219441,234.27356406480118 895,245 C 956.3692930780559,255.72643593519882 999.6378865979382,261.8878865979382 1064,257 C 1128.3621134020618,252.11211340206185 1213.8177466863035,236.17488954344626 1280,240 C 1346.1822533136965,243.82511045655374 1393.0911266568482,267.41255522827686 1440,291 L 1440,500 L 0,500 Z"
];

function wavePaths(seed: string) {
  let state = [...seed].reduce((value, letter) => Math.imul(value ^ letter.charCodeAt(0), 16777619) >>> 0, 2166136261);
  const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  return [0, 1].map(layer => {
    const segments = 7 + Math.floor(random() * 3);
    const step = 1440 / segments;
    const ys = Array.from({ length: segments + 1 }, (_, index) => (layer ? 280 : 120) + (index % 2 ? -1 : 1) * (20 + random() * (layer ? 46 : 30)));
    let path = 'M 0,500 L 0,' + ys[0].toFixed(2);
    for (let index = 1; index <= segments; index++) {
      const x = index * step;
      path += ' C ' + (x - step * 2 / 3).toFixed(2) + ',' + ys[index - 1].toFixed(2) + ' ' + (x - step / 3).toFixed(2) + ',' + ys[index].toFixed(2) + ' ' + x.toFixed(2) + ',' + ys[index].toFixed(2);
    }
    return path + ' L 1440,500 L 0,500 Z';
  });
}

export function PageHeader({title, description, pageKey}: {title: string; description?: string; pageKey: string}) {
  const paths = pageKey === 'submission-guidelines' ? approvedPaths : wavePaths(pageKey);
  const gradientId = 'page-wave-' + pageKey;
  return <header className="page-intro" data-has-description={Boolean(description)}>
    <svg className="page-intro-waves" viewBox="0 0 1440 490" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs><linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="var(--wave-start)" /><stop offset="95%" stopColor="var(--wave-end)" /></linearGradient></defs>
      {paths.map((path, index) => <path key={index} d={path} fill={`url(#${gradientId})`} fillOpacity={index === 0 ? .53 : 1} />)}
    </svg>
    <div className="content-width"><h1>{title}</h1>{description && <p className="page-lead">{description}</p>}</div>
  </header>;
}
