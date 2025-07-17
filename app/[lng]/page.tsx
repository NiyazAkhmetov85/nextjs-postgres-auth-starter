import initI18next from '../../i18n/server'

export default async function Page({ params }: { params: { lng: string } }) {
  const i18n = await initI18next(params.lng)
  const { t } = i18n

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
