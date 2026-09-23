export type FormulaDoc = {
  id: string;
  part: "A" | "B" | "D";
  titleVi: string;
  titleEn: string;
  latex: string;
  keys: string[];
  blurbVi: string;
  blurbEn: string;
};

export const CATALOG: FormulaDoc[] = [
  {
    id: "A1",
    part: "A",
    titleVi: "ATR chuẩn hoá",
    titleEn: "ATR normalize",
    latex: "ATR% = ATRₙ / Close × 100",
    keys: ["atr", "atrPct", "atrSma"],
    blurbVi:
      "True range lấy max của high–low và khoảng nhảy so với đóng cửa trước. ATR% cho phép so sánh chéo giữa các coin.",
    blurbEn:
      "True range is the max of high–low and the gap versus prior close. ATR% makes coins comparable cross-sectionally.",
  },
  {
    id: "A2",
    part: "A",
    titleVi: "Định cỡ fixed-fractional",
    titleEn: "ATR position sizing",
    latex: "Size = (Equity × Risk%) / (ATR × k)",
    keys: ["size", "riskAmount", "stopDist"],
    blurbVi:
      "Rủi ro tiền mặt cố định trên mỗi lệnh, khoảng cách stop = k × ATR. Đây là size đề xuất chính của desk.",
    blurbEn:
      "Fixed cash risk per trade, stop distance = k × ATR. This is the desk’s primary recommended size.",
  },
  {
    id: "A3",
    part: "A",
    titleVi: "Đòn bẩy chuẩn hoá ATR",
    titleEn: "ATR leverage normalize",
    latex: "L_max = (Target risk% / ATR%) × 1/k",
    keys: ["levAtr", "leverage", "atrPct"],
    blurbVi:
      "Tránh stop −99% khi ATR% lớn: đòn bẩy tối đa tỉ lệ nghịch với biến động.",
    blurbEn:
      "Avoid the −99% stop problem when ATR% is huge: max leverage scales inversely with vol.",
  },
  {
    id: "A4",
    part: "A",
    titleVi: "Momentum hiệu chỉnh rủi ro",
    titleEn: "Risk-adjusted momentum",
    latex: "Score = ROCₙ / ATR%",
    keys: ["momentum", "roc", "atrPct"],
    blurbVi:
      "Coin +10% với ATR 1%/ngày mạnh hơn hẳn coin +10% với ATR 5%. Trụ cột của điểm vào.",
    blurbEn:
      "A +10% move at 1% ATR/day dwarfs the same move at 5% ATR. Core of the entry score.",
  },
  {
    id: "A5",
    part: "A",
    titleVi: "Kelly criterion",
    titleEn: "Kelly criterion",
    latex: "f* = (p·b − q) / b",
    keys: ["kelly", "halfKelly"],
    blurbVi:
      "Trần lý thuyết % vốn. Thực tế dùng half-Kelly. Edge âm thì f* ≤ 0 — sizing không cứu được hệ thống.",
    blurbEn:
      "Theoretical fraction of equity. In practice use half-Kelly. Negative edge ⇒ f* ≤ 0 — sizing cannot save the system.",
  },
  {
    id: "A6",
    part: "A",
    titleVi: "Volatility targeting",
    titleEn: "Volatility targeting",
    latex: "L_t = σ_target / σ_realized",
    keys: ["levVol", "atrPct"],
    blurbVi:
      "Đòn bẩy động để danh mục bám mục tiêu biến động năm. Có cap L_max.",
    blurbEn:
      "Dynamic leverage so the book sticks to an annual vol target, capped at L_max.",
  },
  {
    id: "A7",
    part: "A",
    titleVi: "Portfolio heat",
    titleEn: "Portfolio heat",
    latex: "Heat = Σ |Entry − Stop|·Size / Equity",
    keys: ["heat", "maxHeat"],
    blurbVi:
      "Tổng rủi ro đang mở. Trần ≈ 0.5–0.6 × drawdown chấp nhận. Tương quan cao thì nhân risk.",
    blurbEn:
      "Sum of open risk. Cap ≈ 0.5–0.6 × acceptable drawdown. High correlation inflates risk.",
  },
  {
    id: "A8",
    part: "A",
    titleVi: "Stop & trailing ATR",
    titleEn: "ATR stops",
    latex: "SL_long = Entry − k·ATR",
    keys: ["stopDist", "atr"],
    blurbVi:
      "Scalp k=1–1.5, day 1.5–2, swing 2–3. Trailing chỉ đi một hướng theo high − k·ATR.",
    blurbEn:
      "Scalp k=1–1.5, day 1.5–2, swing 2–3. Trailing only ratchets: high − k·ATR.",
  },
  {
    id: "A9",
    part: "A",
    titleVi: "Risk parity",
    titleEn: "Risk parity",
    latex: "wᵢ = (1/σᵢ) / Σ 1/σⱼ",
    keys: [],
    blurbVi:
      "Mỗi coin góp cùng một đơn vị rủi ro. Đòn bẩy tổng kéo σ danh mục về mục tiêu.",
    blurbEn:
      "Each coin contributes the same risk unit. Book leverage then hits the vol target.",
  },
  {
    id: "A10",
    part: "A",
    titleVi: "Sharpe · Sortino · Calmar",
    titleEn: "Sharpe · Sortino · Calmar",
    latex: "Sharpe = (R−R_f)/σ    Calmar = CAGR / MDD",
    keys: ["sharpe", "sortino", "calmar", "cagr", "mdd"],
    blurbVi:
      "Ba thước hiệu suất. Sortino chỉ phạt lệch xuống; Calmar nhìn drawdown.",
    blurbEn:
      "Three performance rulers. Sortino only penalises downside; Calmar looks at drawdown.",
  },
  {
    id: "B1",
    part: "B",
    titleVi: "Optimal f (Vince)",
    titleEn: "Optimal f (Vince)",
    latex: "TWR(f) = Π (1 + f · (−Tᵢ / LargestLoss))",
    keys: ["optF", "halfF", "quarterF", "twr"],
    blurbVi:
      "Tối ưu tăng trưởng hình học trên toàn bộ chuỗi lệnh. Full-f drawdown rất sâu — dùng quarter-f.",
    blurbEn:
      "Maximises geometric growth on the whole trade list. Full-f drawdowns are brutal — use quarter-f.",
  },
  {
    id: "B2",
    part: "B",
    titleVi: "VaR & CVaR",
    titleEn: "VaR & CVaR",
    latex: "ES = V·σ·√T · φ(z) / (1−α)",
    keys: ["var", "cvar", "varPct", "cvarPct"],
    blurbVi:
      "CVaR đo lỗ trung bình trong đuôi, không chỉ ngưỡng. Basel III / FRTB ưa CVaR hơn VaR.",
    blurbEn:
      "CVaR is average loss in the tail, not just the threshold. Basel III / FRTB prefers it to VaR.",
  },
  {
    id: "B3",
    part: "B",
    titleVi: "Risk of Ruin",
    titleEn: "Risk of Ruin",
    latex: "RoR ≈ ((1−A)/(1+A))^U",
    keys: ["ror", "units"],
    blurbVi:
      "Xác suất cháy tài khoản. A ≤ 0 → RoR → 100%. Quản lý vị thế không cứu kỳ vọng âm.",
    blurbEn:
      "Probability of tapping out. A ≤ 0 ⇒ RoR → 100%. Position sizing cannot save a negative-edge system.",
  },
  {
    id: "B4",
    part: "B",
    titleVi: "SQN (Van Tharp)",
    titleEn: "SQN (Van Tharp)",
    latex: "SQN = (R̄ / σ_R) · √N",
    keys: ["sqn"],
    blurbVi:
      "<1.6 yếu; 2.5–3 tốt; >5 nghi overfitting. N kẹp 100. SQN cao thì Kelly/f mới an toàn.",
    blurbEn:
      "<1.6 weak; 2.5–3 good; >5 suspect overfitting. Cap N at 100. High SQN makes Kelly/f safer.",
  },
  {
    id: "B5",
    part: "B",
    titleVi: "Ulcer Index / UPI",
    titleEn: "Ulcer Index / UPI",
    latex: "UI = √(mean Dₜ²)    Dₜ = (Pₜ−peak)/peak",
    keys: ["ulcer", "upi"],
    blurbVi:
      "Phạt cả độ sâu lẫn thời gian nằm dưới đỉnh. Gần 'nỗi đau' live hơn Sharpe.",
    blurbEn:
      "Penalises both depth and time spent under water. Closer to live pain than Sharpe.",
  },
  {
    id: "B6",
    part: "B",
    titleVi: "CPPI",
    titleEn: "CPPI",
    latex: "E_t = min(m · max(V_t − F, 0), V_t)",
    keys: ["floor", "cushion", "exposure"],
    blurbVi:
      "Bảo hiểm tỉ lệ cố định: sàn vốn + cushion × m. Cushion = 0 thì cấm mở lệnh mới.",
    blurbEn:
      "Constant-proportion insurance: a capital floor plus cushion × m. Cushion = 0 forbids new trades.",
  },
  {
    id: "D1",
    part: "D",
    titleVi: "Triple-barrier + meta-label",
    titleEn: "Triple-barrier + meta-label",
    latex: "U = P₀(1+mσ̂)   L = P₀(1−mσ̂)   t₀+h",
    keys: ["pUp"],
    blurbVi:
      "Nhãn theo rào nào chạm trước. Meta-model chỉ hỏi tín hiệu sơ cấp lần này có đáng tin — bet size ∝ P̂.",
    blurbEn:
      "Label by whichever barrier is touched first. The meta-model only asks if this primary signal is trustworthy — bet size ∝ P̂.",
  },
  {
    id: "D2",
    part: "D",
    titleVi: "Purged k-fold + embargo",
    titleEn: "Purged k-fold + embargo",
    latex: "purge overlap(label) ∪ embargo after test",
    keys: [],
    blurbVi:
      "Nhãn tài chính chồng lấn thời gian. CV xáo trộn sẽ leak. Purge cửa sổ nhãn, embargo ~1% sau block test.",
    blurbEn:
      "Financial labels overlap in time. Shuffled CV leaks. Purge overlapping labels and embargo ~1% after each test block.",
  },
  {
    id: "D3",
    part: "D",
    titleVi: "DSR & PBO",
    titleEn: "DSR & PBO",
    latex: "DSR = PSR(SR*)   SR* từ N trials",
    keys: ["dsr", "srStar", "sharpe"],
    blurbVi:
      "Deflated Sharpe trừ may rủi khi thử nhiều biến thể. DSR > 0.95 mới coi là edge thật.",
    blurbEn:
      "Deflated Sharpe subtracts luck from trying many variants. DSR > 0.95 is real-edge territory.",
  },
  {
    id: "D4",
    part: "D",
    titleVi: "Hierarchical Risk Parity",
    titleEn: "Hierarchical Risk Parity",
    latex: "α = 1 − V₁/(V₁+V₂)  (recursive bisection)",
    keys: [],
    blurbVi:
      "Không cần nghịch đảo hiệp phương sai — ổn khi basket altcoin gần suy biến. Thay A9 khi số cặp lớn.",
    blurbEn:
      "No covariance inverse — stable when an alt basket is nearly singular. Replaces A9 on large universes.",
  },
  {
    id: "D5",
    part: "D",
    titleVi: "Parkinson · GK · Yang-Zhang · GARCH",
    titleEn: "Parkinson · GK · Yang-Zhang · GARCH",
    latex: "σ_YZ² = σ_on² + k σ_oc² + (1−k) σ_RS²",
    keys: ["parkinson", "gk", "yz", "garch", "ewma"],
    blurbVi:
      "OHLC giàu hơn close-to-close. Yang-Zhang chuẩn 24/7. GARCH/EWMA dự báo clustering — ATR trễ nhất lúc đổi regime.",
    blurbEn:
      "OHLC is richer than close-to-close. Yang-Zhang is the 24/7 standard. GARCH/EWMA forecast clustering — ATR lags most at regime shifts.",
  },
  {
    id: "D6",
    part: "D",
    titleVi: "Khóa prop-firm",
    titleEn: "Prop-firm locks",
    latex: "daily loss ∧ max DD ∧ scaling plan",
    keys: ["heat", "mdd", "cvarPct"],
    blurbVi:
      "Nhiều lớp giới hạn cứng: lỗ ngày, drawdown từ đỉnh, scale-in theo bậc. Lớp nào chạm trước thì dừng.",
    blurbEn:
      "Stacked hard limits: daily loss, peak-to-trough DD, stepped scaling. First one hit stops the desk.",
  },
];
