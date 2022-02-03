import KnightzCard from '../../cards/KnightzCard'
import { Title } from '../../Title/styles'
import { Section } from './styles'

const MeetSection = () => {

  return (
    <Section>
      <Title>MEET THE KNIGHTZ</Title>

      <div className='knightzWrapper'>
        <KnightzCard name='KYLE HIGDON' nickName='@cap_plantain' avatar='member-04'>
          Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist. Burnt's past clients include WhatsApp, Google, Snapchat, et al.
        </KnightzCard>

        <KnightzCard name='NATALIA VORNIC' nickName='@minibossgrl' avatar='member-03'>
          Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist. Burnt's past clients include WhatsApp, Google, Snapchat, et al.
        </KnightzCard>

        <KnightzCard name='CRISTINA POSTICA' nickName='@loremipsum' avatar='member-02'>
          Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist. Burnt's past clients include WhatsApp, Google, Snapchat, et al.
        </KnightzCard>

        <KnightzCard name='KYLE HIGDON' nickName='@loremipsum' avatar='member-01'>
          Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist. Burnt's past clients include WhatsApp, Google, Snapchat, et al.
        </KnightzCard>
      </div>
    </Section>
  )
}

export default MeetSection
