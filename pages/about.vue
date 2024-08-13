<script setup lang="ts">
useSeoMeta({
	title: 'CUII Liste - Über uns',
	ogTitle: 'CuiiListe.de - Über uns',
})
</script>

<template>
	<div class="container mx-auto">
		<h1 class="text-4xl font-bold text-center mb-3">Über uns</h1>

		<div class="bg-base-300 shadow-lg p-6 rounded-lg">
			<p class="text-lg">
				Hey, diese Seite wird hauptsächlich von mir, Damian (aka <a href="https://damcraft.de" class="link" target="_blank">damcraft.de</a>) betrieben.
			</p>
			<p class="mt-2">
				Ich bin ein 17-jähriger Schüler aus Deutschland mit einer Leidenschaft für Informatik. Dieses Projekt
				ist nicht nur von mir allein entstanden; einige Freunde haben mir großartig geholfen (Schaue weiter unten!).
				Tritt unserem <a :href="useRuntimeConfig().public.discord_invite" class="link">Discord-Server</a> bei, um mit uns zu
				sprechen. Falls du Informationen zur CUII hast, teile sie dort gerne mit uns.
				Andere Kontaktmöglichkeiten findest du weiter unten.
			</p>
			<h2 class="text-2xl font-bold mt-4">Kontakt</h2>
			<ul class="list-disc ml-6 mt-1">
				<li>Discord-Server: <a :href="useRuntimeConfig().public.discord_invite" class="link" target="_blank">{{ useRuntimeConfig().public.discord_invite }}</a></li>
				<li>E-Mail: <a href="mailto:contact@cuiiliste.de" class="link" target="_blank">contact@cuiiliste.de</a></li>
				<li>Direkter Kontakt: Finde mich auf <a href="https://damcraft.de" class="link" target="_blank">damcraft.de</a> –
					Matrix, Discord und mehr.
				</li>
			</ul>
		</div>

		<div class="bg-base-300 shadow-lg p-6 rounded-lg mt-6">
			<h2 class="text-2xl font-bold">Danksagungen</h2>
			<p class="mt-2">
				Danke an alle, die mich bei diesem Projekt unterstützt haben. Ohne euch wäre diese Seite nicht
				möglich. Besonderer Dank geht an:
			</p>
			<ul class="list-disc ml-6 mt-2">
				<li><NuxtLink href="https://northernsi.de" class="link font-bold" target="_blank">Northernside</NuxtLink> für das ranholen der großen Domainliste</li>
				<li><NuxtLink href="https://julias.zone" class="link font-bold" target="_blank">Julia</NuxtLink> für DNS-Resolver-Tests und mehr</li>
				<li><NuxtLink href="https://veronoi.cc/" class="link font-bold" target="_blank">Veronoicc</NuxtLink> für die Suche nach offenen DNS-Resolvern</li>
				<li><NuxtLink href="https://discord.gg/eJMnvktRMA" class="link" target="_blank">SSI</NuxtLink>,
					einem echt coolen technischen Discord-Server mit vielen coolen Nerds -> <NuxtLink href="https://ssi.fyi" class="link" target="_blank">ssi.fyi</NuxtLink></li>
				<li>Die <NuxtLink href="https://web.archive.org/web/20220419210040/https://cuiiliste.de/" class="link" target="_blank">Originale CUIIListe</NuxtLink>,
					welche uns die ursprüngliche Idee gegeben hat</li>
			</ul>
		</div>

		<div class="bg-base-300 shadow-lg p-6 rounded-lg mt-6">
			<h2 class="text-2xl font-bold">Was ist das hier?</h2>
			<p class="mt-2">
				Diese Seite beschäftigt sich mit der CUII und deren Sperrlisten. Die CUII ist eine private Organisation,
				die Webseiten sperrt, die ihrer Meinung nach gegen das Urheberrecht verstoßen – und das ohne
				gerichtliche Beschlüsse.
				Zudem wirkt ihre Vorgehensweise, meiner Meinung nach, sehr intransparent.
			</p>
		</div>

		<div class="bg-base-300 shadow-lg p-6 rounded-lg mt-6">
			<h2 class="text-2xl font-bold">Für Entwickler</h2>
			<p class="mt-2">
				Unsere API ist unter <a href="https://api.cuiiliste.de" class="link">api.cuiiliste.de</a> erreichbar.
				Du kannst den Quellcode für unser Frontend und die API auf GitHub einsehen und daran mitarbeiten.
			</p>
			<div class="mt-4 flex gap-4">
				<a href="https://github.com/DAMcraft/cuiiliste-frontend" class="btn bg-black hover:bg-black text-white" target="_blank">
					CuiiListe-Frontend
					<Icon name="mdi:github" class="ml-2 text-2xl" />
				</a>
				<a href="https://github.com/DAMcraft/cuiiliste" class="btn bg-black hover:bg-black text-white" target="_blank">
					CuiiListe-API
					<Icon name="mdi:github" class="ml-2 text-2xl" />
				</a>
			</div>
		</div>

		<div class="bg-base-300 shadow-lg p-6 rounded-lg mt-6">
			<h2 class="text-2xl font-bold">Disclaimer</h2>
			<p class="mt-2">
				Die auf dieser Website bereitgestellten Informationen dienen ausschließlich allgemeinen Informationszwecken.
				Trotz sorgfältiger Recherche und regelmäßiger Aktualisierung kann keine Garantie für die Vollständigkeit,
				Richtigkeit oder Aktualität der Informationen übernommen werden. Die Nutzung der Informationen erfolgt auf eigene Verantwortung.
				Für eventuelle Schäden oder Konsequenzen, die sich aus der Nutzung der Informationen ergeben, übernehmen wir keine Haftung.
			</p>
			<p>
				CUIIListe.de ist eine unabhängige Plattform und steht in keiner offiziellen Beziehung zur CUII.
				Wir sind nicht mit der CUII verbunden oder von ihr autorisiert.
				Alle Informationen auf dieser Website basieren auf öffentlich verfügbaren Daten und der persönlichen Recherche.
				Bei Fragen oder Unsicherheiten hinsichtlich gesperrter Domains oder der CUII wenden Sie sich bitte direkt an die CUII.
			</p>
			<p>
				CUIIListe.de enthält Links zu externen Websites, die nicht von uns betrieben werden.
				Wir haben keinen Einfluss auf den Inhalt und die Gestaltung dieser externen Websites und übernehmen daher keine Verantwortung für deren Inhalte.
				Die Verantwortung für den Inhalt der verlinkten Seiten liegt ausschließlich bei deren Betreibern.
				Das Setzen eines Links auf eine externe Website bedeutet nicht, dass wir deren Inhalte oder die Betreiber der Seite unterstützen.
				Bei der Verlinkung haben wir die entsprechenden Seiten auf mögliche rechtliche Verstöße überprüft.
				Sollte jedoch eine verlinkte Seite gegen geltendes Recht verstoßen oder problematische Inhalte aufweisen,
				bitten wir um eine entsprechende Mitteilung, damit wir den Link gegebenenfalls entfernen können.
				Die Nutzung der verlinkten Websites erfolgt auf eigene Verantwortung.
				Für die Inhalte der externen Seiten und die daraus resultierenden Folgen übernehmen wir keinerlei Haftung.
			</p>
		</div>

		<div class="my-6 mx-auto flex justify-center">
			<NuxtLink  href="https://ssi.fyi/" target="_blank"><NuxtImg src="/img/ssi-88x31.gif" /></NuxtLink>
			<div class="mx-2"></div>
			<NuxtLink  href="https://damcraft.de/" target="_blank"><NuxtImg src="/img/dam-88x31.gif" /></NuxtLink>
		</div>
	</div>
</template>

<style scoped>

</style>
