export default function highlightSvelte(e) {
	return {
		subLanguage: 'xml',
		contains: [
			e.COMMENT('\x3c!--', '--\x3e', { relevance: 10 }),
			{
				begin: /^(\s*)(<script(\s*context="module")?>)/gm,
				end: /^(\s*)(<\/script>)/gm,
				subLanguage: 'javascript',
				excludeBegin: !0,
				excludeEnd: !0,
				contains: [{ begin: /^(\s*)(\$:)/gm, end: /(\s*)/gm, className: 'keyword' }]
			},
			{
				begin: /^(\s*)(<style.*>)/gm,
				end: /^(\s*)(<\/style>)/gm,
				subLanguage: 'css',
				excludeBegin: !0,
				excludeEnd: !0
			},
			{
				begin: /\{/gm,
				end: /\}/gm,
				subLanguage: 'javascript',
				contains: [
					{
						begin: /[\{]/,
						end: /[\}]/,
						skip: !0
					},
					{
						begin: /([#:\/@])(if|else|each|await|then|catch|debug|html)/gm,
						className: 'keyword',
						relevance: 10
					}
				]
			}
		]
	};
}