import 'vite/modulepreload-polyfill'
import { initDisclosureWidgets } from '@/lib/a11y'
import { revive, islands } from '@/lib/revive.js'
import "../components/productSelector/src/main"

const summaries = document.querySelectorAll('[id^="Details-"] summary')

revive(islands)
initDisclosureWidgets(summaries)
