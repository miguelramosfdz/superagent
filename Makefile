
build: components index.js
	@component build -s superagent -n superagent -o ./

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
