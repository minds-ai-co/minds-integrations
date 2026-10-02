<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MessageComposer from '@minds-ai-co/ui/components/input/MessageComposer.vue'
import Button from '@minds-ai-co/ui/components/button/Button.vue'
import TextInput from '@minds-ai-co/ui/components/input/TextInput.vue'
import StudyPlannerAudienceGrid from '@minds-ai-co/ui/components/research/planner/StudyPlannerAudienceGrid.vue'
import { createFigmaStudy } from './figma-study.js'
const props = defineProps<{ gatewayUrl: string; host: (type: string, text?: string) => Promise<unknown> }>()
const { t } = useI18n()
const flow = createFigmaStudy(props)
const state = flow.state
const questions = computed(() => state.draft?.plan?.modules?.flatMap(module => module.questions.map(question => question.text)) ?? [])
const advanced = computed(() => state.draft?.plan?.modules?.some(module => module.method?.optIn?.required) ?? false)
const missing = computed(() => state.draft?.plan?.confirmation?.missingInputs ?? [])
</script>
<template>
  <section class="figma-study flex flex-col gap-4" aria-label="Minds Study">
    <h1 class="text-lg font-bold">Minds</h1>
    <div v-if="!state.connected" class="flex gap-2">
      <Button id="connect" :disabled="state.busy" @click="flow.connect">Connect Minds</Button>
      <Button variant="secondary" :disabled="state.busy" @click="flow.refresh">Refresh connection</Button>
    </div>
    <MessageComposer :model-value="state.question" :placeholder="t('messageInput.placeholderHintAuto')"
        :disabled="!state.connected || state.busy || !!state.run" :sending="state.busy" @update:model-value="flow.changeQuestion" @submit="flow.prepare" @file="flow.selectMaterial" />
      <Button variant="secondary" :disabled="!state.connected || state.busy || !!state.run" @click="state.pickerOpen = !state.pickerOpen">
        {{ t('chat.selectAudiences') }}<span v-if="state.audienceIds.length"> · {{ state.audienceIds.length }}</span>
      </Button>
    <template v-if="state.connected">
      <p v-if="state.material">{{ state.material.label }}</p>
      <StudyPlannerAudienceGrid v-if="state.pickerOpen" :audiences="state.audiences" :selected-ids="state.audienceIds"
        display-mode="rows" :readonly="state.busy || !!state.run" @select="flow.toggleAudience" />
      <details>
        <summary>Connect this Figma board</summary>
        <TextInput :model-value="state.boardUrl" @update:model-value="flow.changeBoardUrl" :label="t('figmaFeedback.frameLink')" :placeholder="t('figmaFeedback.framePlaceholder')" :disabled="state.busy || !!state.run" />
        <Button variant="secondary" :disabled="state.busy" @click="flow.connectComments">{{ t('figmaFeedback.connect') }}</Button>
        <p>{{ t('figmaFeedback.authorship') }}</p>
        <Button variant="secondary" :disabled="state.busy" @click="flow.disconnect">Disconnect Minds</Button>
      </details>
      <section v-if="state.draft" class="flex flex-col gap-2" aria-label="Confirm research">
        <p>{{ state.material?.label }}</p>
        <ol><li v-for="(question, index) in questions" :key="index">{{ question }}</li></ol>
        <p>Running uses your current Minds allowance; existing plan limits and recharge settings apply.</p>
        <label v-if="advanced" class="flex gap-2"><input v-model="state.advanced" type="checkbox" :disabled="state.busy">{{ t('researchHandoff.advanced') }}</label>
        <p v-for="(item, index) in missing" :key="index">{{ item }}</p>
        <label class="flex gap-2"><input v-model="state.accepted" type="checkbox" :disabled="state.busy">{{ t('researchHandoff.confirm') }} Answers will be posted as comments on this frame.</label>
        <Button :disabled="state.busy || !state.accepted || !!missing.length || (advanced && !state.advanced)" @click="flow.run">{{ t('researchHandoff.run') }}</Button>
      </section>
      <section v-if="state.findings" aria-label="Research answers">
        <p class="whitespace-pre-wrap">{{ state.findings }}</p>
        <Button variant="secondary" :disabled="state.busy" @click="flow.retryComments">Check comment delivery</Button>
      </section>
      <Button v-if="state.draft" variant="secondary" :disabled="state.busy" @click="flow.reset">Start another question</Button>
    </template>
    <p role="status" aria-live="polite">{{ state.status || (state.busy ? t('figmaFeedback.working') : '') }}</p>
  </section>
</template>

<style scoped>
.figma-study :deep(textarea) { min-height: 0; }
.figma-study :deep(input[type="checkbox"]) { width: auto; }
</style>
