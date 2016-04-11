require 'lib/stuff'

describe Stuff do
  subject { Stuff.howdy }

  it { is_expected.to eq 43 }
end
