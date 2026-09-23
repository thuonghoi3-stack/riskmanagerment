# Tổng Hợp Công Thức Quản Lý Vị Thế & Rủi Ro Cho Trading Bot

> Tài liệu tham khảo cho hệ thống trading tự động (Freqtrade / futures). Bao gồm phần công thức nền tảng ban đầu và phần mở rộng từ các phương pháp được giới chuyên gia quant/systematic trading sử dụng rộng rãi.

---

## PHẦN A — CÔNG THỨC NỀN TẢNG

### A1. ATR Normalize — Nền tảng so sánh cross-sectional

$$\text{ATR}_{\text{normalized}} = \frac{\text{ATR}_N}{\text{Close}} \times 100$$

**True Range:**
$$\text{TR} = \max(\text{High} - \text{Low}, |\text{High} - \text{Close}_{\text{prev}}|, |\text{Low} - \text{Close}_{\text{prev}}|)$$

$$\text{ATR}_N = \frac{1}{N}\sum_{i=1}^{N} \text{TR}_i \quad \text{(Simple MA)}$$

EMA version:
$$\text{ATR}_t = \frac{\text{ATR}_{t-1} \times (N-1) + \text{TR}_t}{N}$$

---

### A2. Position Sizing dựa trên ATR (Fixed Fractional)

$$\text{Position Size} = \frac{\text{Risk Amount}}{\text{Stop Distance}} = \frac{\text{Account Equity} \times \text{Risk \%}}{\text{ATR} \times k}$$

- $k$: hệ số nhân ATR (thường 1.5–3)
- Risk %: % vốn rủi ro mỗi lệnh (thường 1–2%)

```
Account = $10,000 | Risk % = 1% → Risk Amount = $100
ATR(14) = $2.5 | k = 2 → Stop Distance = $5
Position Size = $100 / $5 = 20 units
```

---

### A3. ATR Leverage Normalize — Giải pháp cho vấn đề stop -99%

$$\text{Max Leverage} = \frac{\text{Target Risk \%}}{\text{ATR \%}} \times \frac{1}{k}$$

$$\text{ATR \%} = \frac{\text{ATR}_N}{\text{Close}} \times 100$$

Bản có cap:
$$\text{Leverage} = \min\left(\frac{\text{Target Volatility}}{\text{ATR \%} \times \sqrt{252}}, \text{Max Leverage Cap}\right)$$

---

### A4. Risk-Adjusted Return & Momentum Score

$$\text{Risk-Adjusted Return} = \frac{\text{Return \%}}{\text{ATR \%}}$$

$$\text{Momentum Score} = \frac{\text{ROC}_N}{\text{ATR \%}}$$

Coin tăng 10% với ATR 1%/ngày → Score = 10 (mạnh). Coin tăng 10% với ATR 5%/ngày → Score = 2 (yếu).

---

### A5. Kelly Criterion

$$f^* = \frac{p \times b - q}{b} = \frac{p \times (W/L) - (1-p)}{W/L}$$

- $p$: win rate, $q = 1-p$, $b = W/L$: reward-to-risk ratio

Half-Kelly (thực tế):
$$\text{Position Size} = \frac{f^*}{2} \times \text{Account Equity}$$

Kelly điều chỉnh theo ATR:
$$\text{Kelly Adjusted} = f^* \times \frac{\text{ATR}_{\text{reference}}}{\text{ATR}_{\text{current}}}$$

---

### A6. Volatility Targeting — Leverage động

$$\text{Leverage}_t = \frac{\sigma_{\text{target}}}{\sigma_{\text{realized}}}, \qquad \sigma_{\text{annualized}} = \text{ATR \%} \times \sqrt{252}$$

Có giới hạn:
$$\text{Leverage}_t = \min\left(\frac{\sigma_{\text{target}}}{\sigma_{\text{realized}}}, L_{\max}\right)$$

---

### A7. Portfolio Heat

$$\text{Portfolio Heat} = \frac{\sum_{i=1}^{n} (\text{Entry}_i - \text{Stop}_i) \times \text{Size}_i}{\text{Account Equity}} \times 100$$

Heat điều chỉnh tương quan:
$$\text{Adjusted Heat} = \sum_{i=1}^{n} \text{Risk}_i \times \sqrt{\sum_{j=1}^{n} \rho_{ij}}$$

Quy tắc: correlation > 0.8 → nhân risk cặp đó với 1.5–2×. Max Heat = Acceptable Drawdown × (0.5–0.6), ví dụ chấp nhận DD 20% → Max Heat = 10–12%.

---

### A8. Stop-Loss & Take-Profit dựa trên ATR

$$\text{SL}_{\text{long}} = \text{Entry} - k \times \text{ATR}, \qquad \text{SL}_{\text{short}} = \text{Entry} + k \times \text{ATR}$$

k phổ biến: Scalping 1–1.5 | Day trading 1.5–2 | Swing trading 2–3

$$\text{TP} = \text{Entry} \pm R \times (\text{Entry} - \text{SL})$$

Trailing stop:
$$\text{Trailing SL}_t = \max(\text{Trailing SL}_{t-1}, \text{High}_t - k \times \text{ATR}_t)$$

---

### A9. Risk Parity

$$w_i = \frac{1/\sigma_i}{\sum_{j=1}^{n} 1/\sigma_j}, \qquad \text{Leverage}_{\text{total}} = \frac{\sigma_{\text{target}}}{\sum_{i} w_i \sigma_i}$$

---

### A10. Chỉ số bổ sung

$$\text{Sharpe} = \frac{R_p - R_f}{\sigma_p}, \qquad \text{Sortino} = \frac{R_p - R_f}{\sigma_d}, \qquad \sigma_d = \sqrt{\frac{\sum_{r_i < 0} r_i^2}{n}}$$

$$\text{Calmar} = \frac{\text{CAGR}}{\text{Max Drawdown}}$$

---

## PHẦN B — CÔNG THỨC NÂNG CAO TỪ CÁC CHUYÊN GIA

### B1. Optimal f (Ralph Vince)

Phát triển bởi Ralph Vince như phiên bản tổng quát hơn của Kelly, tối ưu hoá tốc độ tăng trưởng hình học (geometric growth) dựa trên toàn bộ chuỗi giao dịch lịch sử thay vì chỉ win-rate/payoff trung bình.

**Terminal Wealth Relative (TWR):**
$$\text{HPR}_i = 1 + f \times \frac{-\text{Trade}_i}{\text{Largest Loss}}, \qquad \text{TWR}(f) = \prod_{i=1}^{n} \text{HPR}_i$$

$f^*$ (Optimal f) là giá trị $f \in (0,1)$ tối đa hoá $\text{TWR}(f)$, tìm bằng cách dò từng bước (ví dụ $f = 0.01, 0.02, ..., 1.00$).

**Quy đổi ra số đơn vị giao dịch:**
$$\text{Số hợp đồng} = \frac{f^* \times \text{Account Equity}}{|\text{Largest Loss}|}$$

Do neo vào khoản lỗ lớn nhất trong lịch sử, Full Optimal f thường tạo drawdown rất sâu và biến động dữ dội trên đường cong vốn. Trong thực hành, giới trader hệ thống gần như luôn dùng một phần nhỏ của nó:
- **Half F** = 50% × Optimal f — phổ biến nhất
- **Quarter F** = 25% × Optimal f — bảo thủ hơn

Đây cũng là phương pháp bổ trợ tốt cho mục A5 (Kelly) trong tài liệu — nên coi Optimal f và Kelly như hai công thức "anh em", cùng có nhược điểm là position size lý thuyết thường vượt xa mức margin/tâm lý chấp nhận được.

---

### B2. Value at Risk (VaR) & Conditional VaR / Expected Shortfall (CVaR)

**VaR (parametric, giả định phân phối chuẩn):**
$$\text{VaR} = V \times z_\alpha \times \sigma \times \sqrt{T}$$

- $V$: giá trị danh mục, $z_\alpha$: z-score theo mức tin cậy (95% → 1.645, 99% → 2.326), $\sigma$: độ lệch chuẩn lợi nhuận theo ngày, $T$: số ngày horizon

**CVaR / Expected Shortfall** — đo mức lỗ trung bình *trong phần đuôi* vượt ngưỡng VaR (VaR chỉ cho biết ngưỡng, không cho biết lỗ tệ đến đâu nếu vượt ngưỡng đó):
$$\text{ES} = V \times \sigma \times \sqrt{T} \times \frac{\varphi(z_\alpha)}{1-\alpha}$$

Trong đó $\varphi(z)$ là hàm mật độ chuẩn tại $z$. CVaR luôn ≥ VaR và được ưa chuộng hơn trong quản trị rủi ro hiện đại vì nắm bắt độ nghiêm trọng của đuôi phân phối, không chỉ ngưỡng cắt. Đây cũng là thước đo mà khung Basel III (FRTB) dùng thay cho VaR truyền thống trong tính vốn rủi ro thị trường của ngân hàng.

**Ứng dụng cho bot:** dùng CVaR làm giới hạn rủi ro danh mục thay cho (hoặc song song với) Portfolio Heat ở mục A7 — vì CVaR tính đến hình dạng đuôi phân phối lợi nhuận thực tế (fat tail) của crypto, vốn không tuân theo phân phối chuẩn tốt như cổ phiếu.

---

### B3. Risk of Ruin (RoR) — Xác suất "cháy tài khoản"

Đo xác suất một chuỗi lệnh thua liên tiếp đưa tài khoản về 0 (hoặc dưới ngưỡng dùng được) trước khi kịp hồi phục.

**Trường hợp 1:1 R:R (thắng/thua bằng nhau):**
$$\text{RoR} = \left(\frac{1-W}{W}\right)^N$$

- $W$: win rate (thập phân), $N$: số đơn vị rủi ro trong tài khoản (= 1 / risk% mỗi lệnh)

Ví dụ: $W = 60\%$, risk 1%/lệnh → $N=100$ → RoR ≈ $2.5 \times 10^{-18}$ (gần như 0). Cùng win rate nhưng risk 10%/lệnh → $N=10$ → RoR ≈ 1.7%. Risk 25%/lệnh → $N=4$ → RoR ≈ 19.8%.

**Trường hợp R:R bất kỳ (xấp xỉ closed-form của Ralph Vince):**
$$A = \frac{W \times \overline{\text{win}} - (1-W) \times \overline{\text{loss}}}{\overline{\text{loss}}}, \qquad \text{RoR} \approx \left(\frac{1-A}{1+A}\right)^{U}$$

- $A$: edge kỳ vọng tính theo R-multiple, $U$ = max drawdown chấp nhận được / risk mỗi lệnh

Nếu $A \le 0$ (không có edge dương) thì RoR tiến về 100% bất kể position size nào — đây là điểm mấu chốt: quản lý vị thế không thể cứu một hệ thống có kỳ vọng âm, chỉ có thể trì hoãn kết cục.

---

### B4. System Quality Number (SQN) — Van Tharp

Đo chất lượng hệ thống dựa trên phân phối R-multiple (lợi nhuận mỗi lệnh tính theo bội số của rủi ro ban đầu):

$$\text{SQN} = \frac{\overline{R}}{\sigma_R} \times \sqrt{N}$$

- $\overline{R}$: R-multiple trung bình (expectancy), $\sigma_R$: độ lệch chuẩn của R-multiple, $N$: số lệnh (thường giới hạn ở 100 để tránh SQN ảo tưởng khi mẫu quá lớn)

Thang tham khảo phổ biến: SQN < 1.6 hệ thống yếu/khó dùng; 1.6–2.5 trung bình; 2.5–3 tốt; 3–5 xuất sắc; > 5 hiếm gặp/cần kiểm tra overfitting. SQN càng cao thì việc áp dụng các công thức sizing ở Phần A (Kelly, Optimal f, volatility targeting) càng an toàn và hiệu quả hơn.

---

### B5. Ulcer Index (UI) & Ulcer Performance Index (UPI / Martin Ratio)

Phát triển bởi Peter Martin (1987), đo rủi ro dựa trên **độ sâu và thời gian kéo dài của drawdown**, khác với std-dev vốn tính đối xứng cả biến động tăng lẫn giảm.

$$D_t = \frac{P_t - M_t}{M_t} \times 100 \quad \text{(M_t = đỉnh cao nhất tính đến thời điểm t)}$$

$$\text{Ulcer Index} = \sqrt{\frac{1}{n}\sum_{t=1}^{n} D_t^2}$$

$$\text{UPI (Martin Ratio)} = \frac{R_p - R_f}{\text{Ulcer Index}}$$

Vì bình phương $D_t$, một drawdown sâu và kéo dài bị phạt nặng hơn nhiều so với nhiều drawdown nông nhưng ngắn — kể cả khi max drawdown danh nghĩa bằng nhau. Rất hữu ích để so sánh hai chiến lược có cùng Sharpe nhưng "cảm giác" khi trade rất khác nhau (một cái hồi phục nhanh, một cái nằm âm hàng tháng).

**Gợi ý dùng cho bot:** thêm UI/UPI vào bộ báo cáo backtest Freqtrade bên cạnh Sharpe/Sortino/Calmar (mục A10) — UI phản ánh sát hơn "nỗi đau tâm lý" thực tế khi vận hành live.

---

### B6. CPPI — Constant Proportion Portfolio Insurance

Kỹ thuật phân bổ động giữ một "sàn" (floor) giá trị tối thiểu cho tài khoản trong khi vẫn giữ phần tham gia vào tài sản rủi ro.

$$F_t = \pi \times V_0 \quad \text{(floor, \% của vốn ban đầu)}$$

$$C_t = \max(V_t - F_t,\ 0) \quad \text{(cushion — phần đệm trên sàn)}$$

$$E_t = \min(m \times C_t,\ V_t) \quad \text{(exposure vào tài sản rủi ro)}$$

- $m$: multiplier (thường 3–6, tương tự $k$ trong ATR sizing nhưng áp trên cushion thay vì trên ATR)

Vốn tài khoản mỗi kỳ tái cân bằng cập nhật theo:
$$V_{t+1} = E_t(1+r_t) + (V_t - E_t)(1+r_f)$$

Multiplier càng cao thì tham gia thị trường càng mạnh khi có lãi, nhưng cũng tăng rủi ro "gap" — nếu thị trường giảm đột ngột vượt quá $1/m$ trong một nhịp, tài khoản có thể xuyên thủng sàn trước khi kịp tái cân bằng (rất đáng lưu ý với crypto futures giao dịch 24/7, biến động gap thực tế hiếm nhưng thanh khoản mỏng có thể gây trượt giá tương đương).

**Ứng dụng cho bot:** CPPI là một lớp quản lý vốn *ở cấp tài khoản tổng*, có thể đặt trên cùng các công thức sizing từng lệnh ở Phần A — ví dụ chỉ cho phép bot mở lệnh mới khi $C_t > 0$, và giới hạn tổng exposure ở mức $E_t$ bất kể tín hiệu chiến lược mạnh đến đâu.

---

## PHẦN C — QUY TRÌNH TÍCH HỢP ĐỀ XUẤT CHO BOT

1. **ATR % + Ulcer Index** → đo volatility & downside pain theo hai góc nhìn bổ sung nhau
2. **CVaR** → giới hạn rủi ro đuôi ở cấp danh mục, thay hoặc bổ sung Portfolio Heat
3. **SQN** → đánh giá chất lượng hệ thống trước khi quyết định mức aggressive của sizing
4. **Kelly / Optimal f (Half hoặc Quarter)** → xác định trần lý thuyết cho % vốn mỗi lệnh
5. **Risk of Ruin** → kiểm tra ngược: với risk% đã chọn ở bước 4, RoR có nằm trong ngưỡng chấp nhận được không (khuyến nghị < 1–2%)
6. **ATR stop distance** → chuyển risk% thành position size cụ thể
7. **CPPI floor/cushion** → giới hạn tổng exposure toàn tài khoản, độc lập với từng lệnh
8. **Volatility targeting + correlation adjustment** → scale leverage cuối cùng theo mục tiêu biến động danh mục

```python
def calculate_position_size(account_equity, entry_price, atr_14,
                             risk_percent=0.01, atr_multiplier=2,
                             max_leverage=5, win_rate=None, avg_win=None, avg_loss=None):
    atr_percent = (atr_14 / entry_price) * 100
    stop_distance = atr_14 * atr_multiplier
    risk_amount = account_equity * risk_percent
    position_size = risk_amount / stop_distance

    required_leverage = (position_size * entry_price) / account_equity
    if required_leverage > max_leverage:
        position_size = (account_equity * max_leverage) / entry_price

    if atr_percent > 10:
        position_size *= 0.5

    # Kiểm tra Risk of Ruin nếu có đủ thống kê hệ thống
    if win_rate and avg_win and avg_loss:
        A = (win_rate * avg_win - (1 - win_rate) * avg_loss) / avg_loss
        N = 1 / risk_percent
        ror = ((1 - A) / (1 + A)) ** N if A > 0 else 1.0
        if ror > 0.02:  # ngưỡng chấp nhận 2%
            position_size *= 0.5

    return position_size
```

---

## PHẦN D — "BÍ QUYẾT" CỦA CÁC NHÓM QUANT CHUYÊN NGHIỆP

Đây là nhóm kỹ thuật ít phổ biến trên các blog trading đại chúng, chủ yếu xuất phát từ giới quant fund / nghiên cứu học thuật (đặc biệt công trình *Advances in Financial Machine Learning* của Marcos López de Prado — cựu Head of Quantitative Research tại nhiều quỹ lớn). Nhóm này giải quyết đúng các vấn đề mà một bot rigor cao (kiểm định thống kê, walk-forward, tránh lookahead) sẽ sớm gặp phải.

### D1. Triple-Barrier Method + Meta-Labeling

**Vấn đề của nhãn (label) truyền thống:** gán nhãn theo dấu lợi nhuận sau N nến cố định bỏ qua toàn bộ đường đi của giá — một lệnh trồi sụt dữ dội rồi hồi phục đúng lúc hết hạn được gán nhãn giống hệt một lệnh đi thẳng mượt mà.

**Triple-Barrier** gán nhãn theo rào chắn nào bị chạm trước, mô phỏng đúng cách một lệnh thật sự đóng:

$$U = P_0(1 + m\hat\sigma) \quad \text{(rào trên — chốt lời)}$$
$$L = P_0(1 - m\hat\sigma) \quad \text{(rào dưới — cắt lỗ)}$$
$$\text{vertical barrier tại } t_0 + h \quad \text{(rào thời gian)}$$

Trong đó $\hat\sigma$ là ước lượng volatility EWMA tại thời điểm đặt lệnh: $\hat\sigma_t^2 = \lambda\hat\sigma_{t-1}^2 + (1-\lambda)r_t^2$. Nhãn = +1 nếu chạm $U$ trước, −1 nếu chạm $L$ trước, theo vertical barrier nếu hết giờ mà chưa chạm rào nào.

**Meta-labeling** — lớp thứ hai đặt trên tín hiệu primary (donchian, rsi_mr, st_flip...): thay vì hỏi "nên long hay short", mô hình phụ chỉ trả lời "tín hiệu primary lần này có đáng tin không". Nhãn meta:
$$y = 1 \text{ nếu lệnh của primary model chạm rào chốt lời trước}$$

Và quan trọng nhất — **bet size tỉ lệ thuận với xác suất dự đoán của meta-model**:
$$\text{Bet Size} \propto \hat P(y=1 \mid \text{features})$$

Đây chính là cơ chế biến một bộ lọc tín hiệu thành một *bet-sizing engine*: không cần mô hình sơ cấp hoàn hảo, chỉ cần biết khi nào nên tin nó nhiều/ít. Rất phù hợp để nối tiếp `barrier_screen.py` — kết quả sàng lọc barrier hiện tại có thể trở thành input để huấn luyện lớp meta-labeling, biến "pass/fail threshold" nhị phân thành một xác suất liên tục điều chỉnh position size.

---

### D2. Purged K-Fold Cross-Validation + Embargo

Nhãn tài chính luôn được tính trên một cửa sổ tương lai (return N-bar tới, hoặc kết quả triple-barrier) — nên các quan sát liền kề có nhãn **chồng lấn thời gian**. K-fold CV tiêu chuẩn xáo trộn ngẫu nhiên sẽ vô tình để một mẫu train "nhìn thấy" đúng đoạn giá mà mẫu test dùng để tính nhãn → leak thông tin, CV score bị thổi phồng, mô hình "ăn gian" qua được validation nhưng chết khi live.

Hai bước sửa:
- **Purging**: loại khỏi tập train mọi quan sát có cửa sổ nhãn chồng lấn thời gian với bất kỳ quan sát nào trong tập test.
- **Embargo**: xoá thêm một khoảng đệm ngay sau mỗi block test (thường 1% tổng mẫu) để chặn rò rỉ qua tương quan chuỗi (serial correlation) — vì volatility/return có tính "dính" theo thời gian, hàng xóm không chồng lấn nhãn vẫn có thể rò rỉ.

Mở rộng: **CPCV (Combinatorial Purged CV)** — chia dữ liệu thành S block, thử mọi tổ hợp IS/OOS có thể, cho ra một *phân phối* hiệu suất backtest thay vì một con số duy nhất, giúp phát hiện overfitting rõ hơn walk-forward đơn thuần.

Đây chính là điều kiện tiên quyết để các con số Bonferroni-corrected hay walk-forward hiện có thực sự đáng tin — nếu nhãn triple-barrier có độ dài giữ lệnh vài nến trở lên, purge + embargo là bắt buộc trước khi tin bất kỳ split train/test nào.

---

### D3. Deflated Sharpe Ratio (DSR) & Probability of Backtest Overfitting (PBO)

Hai công cụ bổ sung cho Bonferroni correction đã dùng, chuyên trị đúng vấn đề "test nhiều biến thể chiến lược cùng lúc thì Sharpe cao nhất tìm được có ý nghĩa gì không".

**Probabilistic Sharpe Ratio (PSR)** — xác suất Sharpe thật vượt ngưỡng $SR^*$, có điều chỉnh cho skewness/kurtosis (dữ liệu tài chính không chuẩn):
$$\text{PSR}(SR^*) = \Phi\left(\frac{(\hat{SR}-SR^*)\sqrt{T-1}}{\sqrt{1-\gamma_3\hat{SR}+\frac{\gamma_4-1}{4}\hat{SR}^2}}\right)$$

**Deflated Sharpe Ratio (DSR)** — đặt ngưỡng $SR^*$ bằng kỳ vọng Sharpe tối đa đạt được **thuần túy do may mắn** khi thử $N$ biến thể không có edge thật:
$$SR^* = \sqrt{V}\left[(1-\gamma)\Phi^{-1}\left(1-\frac{1}{N}\right) + \gamma\Phi^{-1}\left(1-\frac{1}{Ne}\right)\right], \qquad \text{DSR} = \text{PSR}(SR^*)$$

- $N$: số biến thể/tham số đã thử (walk-forward qua nhiều signal family = nhiều trial), $V$: phương sai Sharpe giữa các trial, $\gamma \approx 0.5772$ (hằng số Euler-Mascheroni)
- Quy ước: DSR > 0.95 → bằng chứng mạnh có edge thật; DSR < 0.5 → không phân biệt được với may rủi thuần túy dù backtest "đẹp"

**PBO (qua CSCV — Combinatorially Symmetric Cross-Validation)** — không cần giả định phân phối, đo trực tiếp *độ ổn định thứ hạng*: chia performance matrix (T kỳ × N chiến lược) thành S block bằng nhau, với mỗi cách chia IS/OOS, lấy chiến lược tốt nhất trong IS rồi xem nó xếp hạng bao nhiêu trong OOS. PBO = tỷ lệ số lần "quán quân trong mẫu" rơi xuống nửa dưới ngoài mẫu. PBO cao → dấu hiệu kinh điển của overfitting (nhà vô địch in-sample thường là kẻ thua out-of-sample).

Khi cả DSR lẫn PBO cùng đồng thuận (DSR cao, PBO thấp), đó là bằng chứng mạnh hơn hẳn từng công cụ riêng lẻ — hai công cụ này nên dùng song song với Bonferroni correction đang áp dụng, đặc biệt khi số lượng signal family thử nghiệm tăng lên (donchian, rsi_mr, st_flip... rồi các biến thể tương lai).

---

### D4. Hierarchical Risk Parity (HRP)

Giải pháp thay thế Markowitz mean-variance optimization cho việc phân bổ vốn giữa nhiều cặp coin — đặc biệt hữu ích khi ma trận tương quan altcoin basket bị nhiễu/gần suy biến (chính là vấn đề VIF calibration đang xử lý ở lớp screening).

Ba bước:
1. **Hierarchical clustering** — nhóm các coin theo khoảng cách tương quan $d_{ij} = \sqrt{0.5(1-\rho_{ij})}$, dựng cây phân cấp (dendrogram)
2. **Quasi-diagonalization** — sắp xếp lại ma trận hiệp phương sai theo thứ tự cụm để lộ ra cấu trúc gần khối-chéo (những coin tương quan cao đứng cạnh nhau)
3. **Recursive bisection** — chia đệ quy cây thành hai nửa, phân bổ trọng số nghịch đảo phương sai giữa hai nửa, lặp xuống từng lá:
$$\alpha = 1 - \frac{V_1}{V_1 + V_2}, \qquad V_k = w_k^T \Sigma_k w_k$$

Ưu điểm cốt lõi so với Markowitz: **không cần nghịch đảo ma trận hiệp phương sai** — nên vẫn hoạt động ổn định khi ma trận gần suy biến hoặc số cặp coin lớn (điều mà quadratic optimizer truyền thống xử lý rất tệ). Nghiên cứu gốc cho thấy HRP có volatility ngoài mẫu thấp hơn cả inverse-variance allocation thông thường. Có thể dùng thay hoặc bổ sung cho Risk Parity đơn giản ở mục A9 khi danh mục coin đủ lớn để tương quan giữa các cặp trở thành vấn đề đáng kể.

---

### D5. Ước lượng Volatility nâng cao (thay thế/bổ sung ATR đơn giản)

ATR/close-to-close chỉ dùng giá đóng cửa nên bỏ phí thông tin trong nến (high/low). Các ước lượng sau hiệu quả thống kê cao hơn đáng kể:

**Parkinson** (hiệu quả gấp ~5 lần close-to-close):
$$\sigma_{\text{Parkinson}} = \sqrt{\frac{1}{4\ln 2}\cdot\overline{\left(\ln\frac{\text{High}}{\text{Low}}\right)^2}}$$

**Garman-Klass** (thêm open/close):
$$\sigma_{\text{GK}} = \sqrt{\frac{1}{2}\left(\ln\frac{H}{L}\right)^2 - (2\ln 2 - 1)\left(\ln\frac{C}{O}\right)^2}$$

**Yang-Zhang** (xử lý tốt cả overnight gap lẫn drift, được coi là chuẩn hiện đại nhất cho tài sản giao dịch 24/7 như crypto) — kết hợp overnight volatility, open-to-close volatility, và Rogers-Satchell volatility theo trọng số tối ưu.

**GARCH(1,1)** — dự báo (chứ không chỉ đo lường quá khứ) volatility kỳ tới:
$$\sigma_t^2 = \omega + \alpha\,\varepsilon_{t-1}^2 + \beta\,\sigma_{t-1}^2$$

- $\omega>0, \alpha\ge0, \beta\ge0$; $\alpha+\beta$ càng gần 1 thì cú sốc volatility càng "dai" (volatility clustering) trước khi hồi quy về mức dài hạn
- **EWMA (RiskMetrics)** là trường hợp đặc biệt của GARCH: $\sigma_t^2 = \lambda\sigma_{t-1}^2+(1-\lambda)r_{t-1}^2$, với $\lambda=0.94$ cho dữ liệu ngày

**Ứng dụng cho bot:** thay $\text{ATR}_N$ ở mục A1/A3 bằng Yang-Zhang hoặc GARCH-forecast volatility sẽ cho ước lượng risk chính xác hơn ATR thô, đặc biệt trong giai đoạn chuyển regime (volatility clustering) — đúng lúc ATR trễ (lagging) nhất.

---

### D6. Quy tắc scaling vốn kiểu Prop-Firm

Một "bí quyết" khác không đến từ học thuật mà từ thực tiễn vận hành của các quỹ prop trading hiện đại (funded trader programs): thay vì tính risk% cố định, họ ràng buộc bot theo **nhiều lớp giới hạn đồng thời**, lớp nào chạm trước thì dừng:

- **Daily loss limit** — dừng toàn bộ giao dịch trong ngày nếu lỗ vượt X% vốn (thường 3–5%), reset lại vào phiên/ngày sau
- **Max overall drawdown** — ngưỡng cứng tính từ đỉnh vốn cao nhất từng đạt được (không phải từ vốn ban đầu) — nếu chạm, toàn bộ hệ thống dừng vĩnh viễn chờ đánh giá lại, tương tự "circuit breaker"
- **Scaling plan** — vốn giao dịch chỉ tăng theo bậc thang sau khi đạt mốc lợi nhuận nhất định và giảm ngay khi có streak thua, tương tự tinh thần Half/Quarter-Kelly ở mục B1 nhưng áp dụng động theo hiệu suất gần nhất thay vì tĩnh

Về bản chất đây là một lớp Portfolio Heat / CPPI (mục A7, B6) được rời rạc hoá thành các ngưỡng cứng dễ giám sát và dễ code thành circuit-breaker trong bot, thay vì công thức liên tục.

---

## Nguồn tham khảo (để tra cứu chi tiết thêm)

- Ralph Vince — *Portfolio Management Formulas*, khái niệm Optimal f / TWR (quantpedia.com, turtletrader.com, quantfiction.com)
- Van Tharp — *The Definitive Guide to Position Sizing*, khái niệm SQN và R-multiple
- Peter G. Martin & Byron McCann (1987/1989) — *The Investor's Guide to Fidelity Funds*, khái niệm Ulcer Index / UPI (tangotools.com/ui, stockcharts.com)
- Black, Jones, Perold — nghiên cứu gốc về CPPI (quantpedia.com, metricgate.com)
- FRTB / Basel III — chuẩn CVaR-Expected Shortfall thay thế VaR trong quản trị rủi ro ngân hàng
- Risk of Ruin closed-form approximation (Ralph Vince) — crosstrade.io/learn/risk-management
- Marcos López de Prado — *Advances in Financial Machine Learning* (2018): Triple-Barrier Method, Meta-Labeling, Purged K-Fold CV + Embargo, CPCV (hudsonthames.org, quantmemo.com, luxalgo.com)
- Bailey, D.H. & López de Prado, M. (2014) — *The Deflated Sharpe Ratio*, Journal of Portfolio Management 40(5) (SSRN 2460551); Bailey, Borwein, López de Prado & Zhu — PBO/CSCV
- López de Prado, M. (2016) — *Building Diversified Portfolios that Outperform Out-of-Sample* — Hierarchical Risk Parity
- Bollerslev, T. — GARCH model gốc; RiskMetrics (JP Morgan) — EWMA λ=0.94; Parkinson (1980), Garman-Klass (1980), Yang-Zhang (2000) — các ước lượng volatility từ OHLC

*Lưu ý: các công thức RoR/Kelly/Optimal f đều giả định thống kê hệ thống (win rate, avg win/loss) ổn định theo thời gian — với crypto, cần backtest walk-forward và theo dõi lại các tham số này định kỳ vì regime thị trường thay đổi nhanh. Các kỹ thuật ở Phần D (đặc biệt D2, D3) nên được coi là điều kiện tiên quyết chứ không phải tùy chọn — nếu quy trình kiểm định chưa purge/embargo nhãn chồng lấn, mọi con số Sharpe/Bonferroni phía trên đều có nguy cơ bị thổi phồng bởi chính cách chia train/test.*
